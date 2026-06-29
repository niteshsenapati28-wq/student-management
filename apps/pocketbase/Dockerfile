FROM debian:bookworm-slim

# PocketBase's static binary needs CA certs for outbound HTTPS (email, etc.)
RUN apt-get update && apt-get install -y --no-install-recommends ca-certificates \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY pocketbase ./pocketbase
COPY pb_hooks ./pb_hooks
COPY pb_migrations ./pb_migrations
COPY pb_data ./pb_data_seed

RUN chmod +x ./pocketbase

# No persistent disk on the free tier, so the database lives inside the
# container at ./pb_data. We seed it from your existing data.db on first
# boot. NOTE: any new data added after deploy will be lost on the next
# redeploy/restart, since this storage isn't persistent on the free tier.
COPY start.sh ./start.sh
RUN chmod +x ./start.sh

EXPOSE 8090

CMD ["./start.sh"]
