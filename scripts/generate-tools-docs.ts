import * as fs from "node:fs";
import * as path from "node:path";

// Define interfaces for the tool structure
interface Tool {
  name: string;
  description: string;
  inputSchema: {
    type: string;
    properties?: {
      request?: {
        type: string;
        properties?: Record<string, any>;
      };
    };
  };
}

interface ToolsData {
  tools: Tool[];
}

interface GroupedTools {
  [resourceType: string]: {
    name: string;
    description: string;
    requestProperties?: string[];
  }[];
}

// Function to extract resource type from tool name
function getResourceType(toolName: string): string {
  const parts = toolName.split("-");
  return parts[0];
}

// Function to extract request properties if they exist
function getRequestProperties(tool: Tool): string[] | undefined {
  if (
    tool.inputSchema?.properties?.request?.properties &&
    Object.keys(tool.inputSchema.properties.request.properties).length > 0
  ) {
    // Filter out properties that are objects with their own properties
    return Object.keys(tool.inputSchema.properties.request.properties).filter(
      (prop) => {
        const propValue =
          tool.inputSchema.properties?.request?.properties?.[prop];
        return !(
          propValue &&
          typeof propValue === "object" &&
          propValue.type === "object" &&
          propValue.properties
        );
      }
    );
  }
  return undefined;
}

// Function to get the request object schema if it exists
function getRequestSchema(tool: Tool): any {
  if (tool.inputSchema?.properties?.request) {
    return tool.inputSchema.properties.request;
  }
  return null;
}

// Main function to generate the markdown documentation
function generateToolsMarkdown(): string {
  // Read the tools.json file
  const toolsFilePath = path.join(process.cwd(), "tools.json");
  const toolsData: ToolsData = JSON.parse(
    fs.readFileSync(toolsFilePath, "utf8")
  );

  // Group tools by resource type
  const groupedTools: GroupedTools = {};

  toolsData.tools.forEach((tool) => {
    const resourceType = getResourceType(tool.name);

    if (!groupedTools[resourceType]) {
      groupedTools[resourceType] = [];
    }

    groupedTools[resourceType].push({
      name: tool.name,
      description: tool.description,
      requestProperties: getRequestProperties(tool),
    });
  });

  // Generate markdown content
  let markdown = "# Discord MCP Tools\n\n";
  markdown +=
    "This document lists all available tools in the Discord MCP Server, organized by resource type.\n\n";

  // Sort resource types alphabetically
  const sortedResourceTypes = Object.keys(groupedTools).sort();

  // Generate table of contents
  markdown += "## Table of Contents\n\n";
  sortedResourceTypes.forEach((resourceType) => {
    const capitalizedResourceType =
      resourceType.charAt(0).toUpperCase() + resourceType.slice(1);
    markdown += `- [${capitalizedResourceType}](#${resourceType})\n`;
  });
  markdown += "\n";

  // Generate sections for each resource type
  sortedResourceTypes.forEach((resourceType) => {
    // Capitalize the resource type for the heading
    const capitalizedResourceType =
      resourceType.charAt(0).toUpperCase() + resourceType.slice(1);
    markdown += `## ${capitalizedResourceType}\n\n`;

    // Sort tools within each resource type alphabetically
    const sortedTools = groupedTools[resourceType].sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    sortedTools.forEach((tool) => {
      // Use lowercase for the tool name
      markdown += `### ${tool.name.toLowerCase()}\n\n`;
      markdown += `${tool.description}\n\n`;

      // Get the original tool to access the full schema
      const originalTool = toolsData.tools.find((t) => t.name === tool.name);
      if (originalTool) {
        const requestSchema = getRequestSchema(originalTool);

        if (requestSchema && Object.keys(requestSchema).length > 0) {
          markdown += `**Request Schema:**\n\n`;
          markdown += "```json\n";
          markdown += JSON.stringify(requestSchema, null, 2);
          markdown += "\n```\n\n";
        } else {
          markdown += `**Request Schema:** None\n\n`;
        }
      }
    });
  });

  return markdown;
}

// Execute the function and write the output to a file
try {
  const markdown = generateToolsMarkdown();
  const outputPath = path.join(process.cwd(), "docs", "mcp-tools.md");

  // Ensure the docs directory exists
  const docsDir = path.join(process.cwd(), "docs");
  if (!fs.existsSync(docsDir)) {
    fs.mkdirSync(docsDir, { recursive: true });
  }

  // Write the markdown file
  fs.writeFileSync(outputPath, markdown);
  console.log(`Documentation generated successfully at ${outputPath}`);
} catch (error) {
  console.error("Error generating documentation:", error);
}
