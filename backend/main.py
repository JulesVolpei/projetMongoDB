from fastapi import FastAPI, HTTPException
from typing import List 
from model import (Adresse, Localisation, RessourcesHumaines, Contacts, Chantier, Horaires, Entreprise, Commentaire)

from database import (
    fetch_one_entreprise,
    fetch_all_entreprises,
    fetch_entreprises_within_radius,
    create_entreprise,
    update_entreprise,
    remove_entreprise,
    fetch_all_comments_of_entreprise,
    create_commentaire,
    fetch_comments_by_author,
    update_commentaire,
    remove_commentaire,
    average_rating_for_entreprise
)

from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()

origins = [
    "http://localhost:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def read_root():
    return {"Hello": "World"}

@app.get("/api/entreprise")
async def get_entreprises():
    response = await fetch_all_entreprises()
    return response

@app.get("/api/entreprise/{nom}")
async def get_entreprise_by_nom(nom):
    response = await fetch_one_entreprise(nom)
    if response:
        return response
    raise HTTPException(404, f"Il n'y a pas d'entreprise avec le nom {nom}.")

@app.get("/api/entreprises/{latitude}/{longitude}/{radius}")
async def get_entreprises_within_radius(latitude: float, longitude: float, radius: int):
    entreprises = await fetch_entreprises_within_radius(latitude, longitude, radius)
    if entreprises:
        for document in entreprises:
            distance_meters = document.get("distance", 0)
            distance_kilometers = distance_meters / 1000
            rounded_distance = round(distance_kilometers, 2)
            document["distance"] = rounded_distance
        return entreprises
    raise HTTPException(404, "Aucune entreprise trouvée dans le rayon spécifié.")



@app.post("/api/entreprise/")
async def post_entreprise(entreprise: Entreprise):
    response = await create_entreprise(entreprise)
    if response:
        return response
    raise HTTPException(400, "Une erreur est survenue.")

@app.put("/api/entreprise/{nom}/")
async def put_entreprise(nom: str, adresse: Adresse, localisation: Localisation, ressourcesHumaines: RessourcesHumaines,
                          contacts: Contacts, chantiers: List[Chantier], horaires: List[Horaires], services: List[str]):
    response = await update_entreprise(nom, adresse, localisation, ressourcesHumaines, contacts, chantiers, horaires, services)
    if response:
        return response
    raise HTTPException(404, f"Il n'y a pas d'entreprise avec le nom {nom}.")

@app.delete("/api/entreprise/{nom}")
async def delete_entreprise(nom):
    response = await remove_entreprise(nom)
    if response:
        return "Entreprise supprimé."
    raise HTTPException(404, f"Il n'y a pas d'entreprise avec le nom {nom}.")

@app.get("/api/commentaire/{entreprise_nom}/{auteur}")
async def get_commentaires_by_author(entreprise_nom: str, auteur: str):
    response = await fetch_comments_by_author(entreprise_nom,auteur)
    if response:
        return response
    raise HTTPException(404, f"Aucun commentaire trouvé pour l'entreprise {entreprise_nom} par l'auteur {auteur}.")

@app.get("/api/commentaire/{entreprise_nom}")
async def get_commentaires_of_entreprise(entreprise_nom: str):
    response = await fetch_all_comments_of_entreprise(entreprise_nom)
    if response:
        return response
    raise HTTPException(404, f"Aucun commentaire trouvé pour l'entreprise {entreprise_nom}.")

@app.post("/api/commentaire/")
async def post_commentaire(commentaire: Commentaire):
    response = await create_commentaire(commentaire)
    if response:
        return response
    raise HTTPException(400, "Une erreur est survenue lors de l'insertion.")

@app.put("/api/commentaire/{entreprise_nom}/{auteur}/{ancienContenu}")
async def put_commentaire(entreprise_nom: str, auteur: str, ancienContenu: str, nouveau_contenu: str):
    success = await update_commentaire(entreprise_nom, auteur, ancienContenu, nouveau_contenu)
    if success:
        return "Commentaire mis à jour avec succès."
    raise HTTPException(404, f"Aucun commentaire trouvé pour l'auteur {auteur} dans l'entreprise {entreprise_nom}.")

@app.delete("/api/commentaire/{entreprise_nom}/{auteur}")
async def delete_commentaire(entreprise_nom: str, auteur: str):
    response = await remove_commentaire(entreprise_nom, auteur)
    if response:
        return "Commentaire supprimé."
    raise HTTPException(404, f"Aucun commentaire trouvé pour l'auteur {auteur} dans l'entreprise {entreprise_nom}.")

# Lien collection Commentaires & Entreprises
@app.get("/api/entreprise/moyenne_note/{nom}")
async def get_average_rating_for_entreprise(nom: str):
    average_rating = await average_rating_for_entreprise(nom)
    if average_rating is not None:
        return {"entrepriseNom": nom, "moyenneNote": average_rating}
    raise HTTPException(404, f"L'entreprise {nom} n'a aucune note.")

