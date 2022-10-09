from typing import Union
from unittest import result
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import requests
import json
import sys


app = FastAPI()

origins = [
    "http://localhost:3000",
    "http://localhost:3000/apitest",
    "http://localhost:81",
    "http://localhost:81/test",
    "http://localhost:8080",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():   
    return {"test1":987}
    
@app.get("/test/{id}")
def read_test(id: str):   
    return {"test2":"123456-"+id}
