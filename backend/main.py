from fastapi import FastAPI, HTTPException
from typing import List 
from model import (Adresse, Localisation, RessourcesHumaines, Contacts, Chantier, Horaires, Entreprise)

from database import (
    fetch_one_entreprise,
    fetch_all_entreprises,
    create_entreprise,
    update_entreprise,
    remove_entreprise
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
    raise HTTPException(404, f"There is no entreprise with the name {nom}")

@app.post("/api/entreprise/")
async def post_entreprise(entreprise: Entreprise):
    response = await create_entreprise(entreprise)
    if response:
        return response
    raise HTTPException(400, "Something went wrong")

@app.put("/api/entreprise/{nom}/")
async def put_entreprise(nom: str, adresse: Adresse, localisation: Localisation, ressourcesHumaines: RessourcesHumaines,
                          contacts: Contacts, chantiers: List[Chantier], horaires: List[Horaires], services: List[str]):
    response = await update_entreprise(nom, adresse, localisation, ressourcesHumaines, contacts, chantiers, horaires, services)
    if response:
        return response
    raise HTTPException(404, f"There is no entreprise with the name {nom}")

@app.delete("/api/entreprise/{nom}")
async def delete_entreprise(nom):
    response = await remove_entreprise(nom)
    if response:
        return "Successfully deleted entreprise"
    raise HTTPException(404, f"There is no entreprise with the name {nom}")