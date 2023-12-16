from datetime import datetime
from pydantic import BaseModel
from typing import List,Optional

# Collection Entreprises
class Adresse(BaseModel):
    numero: int
    voie: str
    codePostal: int
    ville: str

class Localisation(BaseModel):
    type: str
    coordinates: List[float]

class RessourcesHumaines(BaseModel):
    directeur: str
    nombreEmployes: int
    nombreOuvriers: int

class Contacts(BaseModel):
    telephone: str
    mail: str

class Chantier(BaseModel):
    chef: str
    coutTotal: float
    facturation: float
    nombreOuvriers: int
    dateDebut: datetime 
    dateFin: Optional[datetime]
    services: List[str]

class Horaires(BaseModel):
    jour: str
    debut: int
    fin: int

class Entreprise(BaseModel):
    nom: str
    adresse: Adresse
    localisation: Localisation
    ressourcesHumaines: RessourcesHumaines
    contacts: Contacts
    chantiers: List[Chantier]
    horaires: List[Horaires]
    services: List[str]

# Collections Commentaires
class Commentaire(BaseModel):
    entrepriseNom: str
    auteur: str
    contenu: Optional[str]
    dateCreation: datetime
    note: int