generate-fixes-overlay:
	curl -s https://raw.githubusercontent.com/discord/discord-api-spec/refs/heads/main/specs/openapi.json > .speakeasy/openapi.json
	speakeasy overlay compare \
    --before .speakeasy/openapi.json \
    --after  .speakeasy/openapi-fixes.yaml \
    --out    .speakeasy/fixes-overlay.yaml
	rm .speakeasy/openapi.json
