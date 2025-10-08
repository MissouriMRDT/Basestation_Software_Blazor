#!/bin/bash
dotnet run --configuration Release --project Basestation_Software.Api --runtime linux-x64 --urls 'http://*:5000'
