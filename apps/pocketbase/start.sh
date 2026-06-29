#!/bin/sh
# Seed the database folder from our bundled copy if it's not there yet
# (e.g. on a fresh container start).
if [ ! -f "./pb_data/data.db" ]; then
  mkdir -p ./pb_data
  cp -r ./pb_data_seed/* ./pb_data/ 2>/dev/null || true
fi

exec ./pocketbase serve --http=0.0.0.0:8090 --dir=./pb_data --migrationsDir=./pb_migrations --hooksDir=./pb_hooks --hooksWatch=false
