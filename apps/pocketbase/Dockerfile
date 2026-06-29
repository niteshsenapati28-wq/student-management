FROM debian:bookworm-slim

# PocketBase's static binary needs CA certs for outbound HTTPS (email, etc.)
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY pocketbase ./pocketbase
COPY pb_hooks ./pb_hooks
COPY pb_migrations ./pb_migrations

RUN chmod +x ./pocketbase

# No persistent disk on the free tier, so the database lives inside the
# container at ./pb_data and starts fresh each time PocketBase boots.
# All collections (students, courses, departments, etc.) are recreated
# automatically from pb_migrations — only the actual data rows will be
# empty until you add them through the app.
# NOTE: anything you add after deploy will be lost on the next
# redeploy/restart, since this storage isn't persistent on the free tier.
EXPOSE 8090

CMD ["./pocketbase", "serve", "--http=0.0.0.0:8090", "--dir=./pb_data", "--migrationsDir=./pb_migrations", "--hooksDir=./pb_hooks", "--hooksWatch=false"]
