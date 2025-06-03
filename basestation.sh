#!/usr/bin/env bash
cd /home/marsroverbs/Basestation_Software_Blazor

xfce4-terminal -e ./web.sh &
xfce4-terminal -e ./api.sh &
xfce4-terminal -e firefox "localhost:8080" &