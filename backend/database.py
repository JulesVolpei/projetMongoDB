import os
from dotenv import load_dotenv
import motor.motor_asyncio
from model import (Entreprise,Commentaire)

load_dotenv()
mongodb_uri = os.getenv("MONGODB_URI")

client = motor.motor_asyncio.AsyncIOMotorClient(mongodb_uri)
database = client.project
entreprise_collection = database.entreprises
commentaire_collection = database.commentaires

# Collections Entreprises
async def fetch_one_entreprise(nom):
    document = await entreprise_collection.find_one({"nom": nom})
    if document:
        document['_id'] = str(document.get('_id')) 
        return Entreprise(**document)
    return None

async def fetch_all_entreprises():
    entreprises = []
    cursor = entreprise_collection.find({})
    async for document in cursor:
        document['_id'] = str(document.get('_id'))
        entreprises.append(Entreprise(**document))
    return entreprises

async def fetch_entreprises_within_radius(latitude, longitude, radius):
    pipeline = [
        {
            "$geoNear": {
                "near": {"type": "Point", "coordinates": [latitude, longitude]},
                "distanceField": "distance",
                "spherical": True,
                "maxDistance": radius*1000,
                "query": {},
            }
        }
    ]
    cursor = await entreprise_collection.aggregate(pipeline).to_list(None)
    for document in cursor:
        document['_id'] = str(document.get('_id'))

    return cursor



async def create_entreprise(entreprise):
    document = entreprise.dict()
    result = await entreprise_collection.insert_one(document)
    return document

async def update_entreprise(nom, adresse, localisation, ressourcesHumaines, contacts, chantiers, horaires, services):
    await entreprise_collection.update_one(
        {"nom": nom},
        {
            "$set": {
                "adresse": adresse.dict(),
                "localisation": localisation.dict(),
                "ressourcesHumaines": ressourcesHumaines.dict(),
                "contacts": contacts.dict(),
                "chantiers": [chantier.dict() for chantier in chantiers],
                "horaires": [horaire.dict() for horaire in horaires],
                "services": services
            }
        }
    )
    return True

async def remove_entreprise(nom):
    await entreprise_collection.delete_one({"nom": nom})
    return True

# Collections Commentaires
async def fetch_comments_by_author(entreprise_nom, auteur):
    cursor = commentaire_collection.find({"entrepriseNom": entreprise_nom, "auteur": auteur})
    commentaires = [Commentaire(**document) async for document in cursor]
    return commentaires if commentaires else None

async def fetch_all_comments_of_entreprise(entreprise_nom):
    commentaires = []
    cursor = commentaire_collection.find({"entrepriseNom": entreprise_nom})
    async for document in cursor:
        commentaires.append(Commentaire(**document))
    return commentaires

async def create_commentaire(commentaire):
    document = commentaire.dict()
    result = await commentaire_collection.insert_one(document)
    return Commentaire(**document)

async def update_commentaire(entreprise_nom, auteur, ancienContenu, nouveau_contenu):
    await commentaire_collection.update_one(
        {"entrepriseNom" : entreprise_nom, "auteur":auteur, "contenu":ancienContenu},
        {"$set": {"contenu" : nouveau_contenu}}
    )
    return True

async def remove_commentaire(entreprise_nom, auteur):
    result = commentaire_collection.delete_many({"entrepriseNom": entreprise_nom, "auteur": auteur})
    return True

# Lien collection Commentaires & Entreprises
async def average_rating_for_entreprise(entreprise_nom):
    pipeline = [
        {"$match": {"entrepriseNom": entreprise_nom}},
        {"$group": {"_id": None, "averageRating": {"$avg": "$note"}}}
    ]
    result = await commentaire_collection.aggregate(pipeline).to_list(1)
    return result[0]['averageRating'] if result else None
