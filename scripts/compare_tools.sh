#!/bin/bash

function compare_tools() {
  # Directory paths
  FUNCS_DIR="./funcs"
  TOOLS_DIR="./mcp-server/tools"

  # Get list of function files (strip path and extension)
  echo "Collecting function files..."
  FUNC_FILES=$(find "$FUNCS_DIR" -type f | grep -v "\.d\.ts\|\.map" | sed "s|$FUNCS_DIR/||" | sed 's/\.[^.]*$//' | sort)

  # Get list of tool files (strip path and extension)
  echo "Collecting tool files..."
  TOOL_FILES=$(find "$TOOLS_DIR" -type f | grep -v "\.d\.ts\|\.map" | sed "s|$TOOLS_DIR/||" | sed 's/\.[^.]*$//' | sort)

  # Count total files
  FUNC_COUNT=$(echo "$FUNC_FILES" | wc -l)
  TOOL_COUNT=$(echo "$TOOL_FILES" | wc -l)

  echo "Total function files: $FUNC_COUNT"
  echo "Total tool files: $TOOL_COUNT"
  echo ""

  # Find functions that don't have corresponding tools
  echo "Analyzing differences..."
  echo "Functions without corresponding tools:"
  echo "======================================"

  MISSING_TOOLS=0
  for func in $FUNC_FILES; do
    if ! echo "$TOOL_FILES" | grep -q "^$func$"; then
      echo "$func"
      MISSING_TOOLS=$((MISSING_TOOLS + 1))
    fi
  done

  echo ""
  echo "Total functions without tools: $MISSING_TOOLS"
  echo ""

  # Summary
  echo ""
  echo "Summary:"
  echo "========"
  echo "Total function files:$FUNC_COUNT"
  echo "Total tool files:$TOOL_COUNT"
}

# Run the function
compare_tools