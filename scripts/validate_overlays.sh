#!/bin/bash

# Script to validate all overlay files against the OpenAPI schema

echo "Validating overlay files..."
echo "============================"

# Validate overlay files in the main .speakeasy directory
for overlay_file in .speakeasy/*-overlay.yaml; do
    echo -n "Validating $overlay_file... "
    speakeasy overlay apply --overlay "$overlay_file" --schema .speakeasy/openapi.yaml --strict > /dev/null 2>&1

    if [ $? -eq 0 ]; then
        echo "✅ Valid"
    else
        echo "❌ Error"
        # Run again to show the error
        speakeasy overlay apply --overlay "$overlay_file" --schema .speakeasy/openapi.yaml --strict
    fi
done

# Validate overlay files in the overlays subdirectory
for overlay_file in .speakeasy/overlays/*-overlay.yaml; do
    echo -n "Validating $overlay_file... "
    speakeasy overlay apply --overlay "$overlay_file" --schema .speakeasy/openapi.yaml --strict > /dev/null 2>&1

    if [ $? -eq 0 ]; then
        echo "✅ Valid"
    else
        echo "❌ Error"
        # Run again to show the error
        speakeasy overlay apply --overlay "$overlay_file" --schema .speakeasy/openapi.yaml --strict
    fi
done

echo "============================"
echo "Validation complete!"
