import os
from dotenv import load_dotenv
import motor.motor_asyncio
from model import (Adresse, Localisation, RessourcesHumaines, Contacts, Chantier, Horaires, Entreprise)

load_dotenv()
mongodb_uri = os.getenv("MONGODB_URI")

client = motor.motor_asyncio.AsyncIOMotorClient(mongodb_uri)
database = client.project
collection = database.entreprises

async def fetch_one_entreprise(nom):
    document = await collection.find_one({"nom": nom})
    return document

async def fetch_all_entreprises():
    entreprises = []
    cursor = collection.find({})
    async for document in cursor:
        entreprises.append(Entreprise(**document))
    return entreprises

async def create_entreprise(entreprise):
    document = entreprise.dict()
    result = await collection.insert_one(document)
    return document

async def update_entreprise(nom, adresse, localisation, ressourcesHumaines, contacts, chantiers, horaires, services):
    await collection.update_one(
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
    document = await collection.find_one({"nom": nom})
    return document

async def remove_entreprise(nom):
    await collection.delete_one({"nom": nom})
    return True
