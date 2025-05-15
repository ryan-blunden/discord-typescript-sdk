# Discord MCP Tools

This document lists all available tools in the Discord MCP Server, organized by resource type.

## Table of Contents

- [Application](#application)
- [Applications](#applications)
- [Audit](#audit)
- [Auto](#auto)
- [Channels](#channels)
- [Emoji](#emoji)
- [Entitlements](#entitlements)
- [Guild](#guild)
- [Guilds](#guilds)
- [Invites](#invites)
- [Lobbies](#lobbies)
- [Messages](#messages)
- [Polls](#polls)
- [Soundboards](#soundboards)
- [Stage](#stage)
- [Stickers](#stickers)
- [Users](#users)
- [Voice](#voice)
- [Webhooks](#webhooks)

## Application

### application-role-connection-metadata-delete-user-connection

Deletes the application role connection for the user.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    }
  },
  "required": [
    "application_id"
  ],
  "additionalProperties": false
}
```

### application-role-connection-metadata-list

Returns a list of application role connection metadata objects for the given application.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    }
  },
  "required": [
    "application_id"
  ],
  "additionalProperties": false
}
```

### application-role-connection-metadata-update

Updates and returns a list of application role connection metadata objects for the given application. An application can have a maximum of 5 metadata records.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    },
    "RequestBody": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "number",
                "const": 1
              },
              "key": {
                "type": "string"
              },
              "name": {
                "type": "string"
              },
              "name_localizations": {
                "anyOf": [
                  {
                    "type": "object",
                    "additionalProperties": {
                      "type": [
                        "string",
                        "null"
                      ]
                    }
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "description": {
                "type": "string"
              },
              "description_localizations": {
                "anyOf": [
                  {
                    "type": "object",
                    "additionalProperties": {
                      "type": [
                        "string",
                        "null"
                      ]
                    }
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "required": [
              "key",
              "name",
              "description"
            ],
            "additionalProperties": false
          }
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "required": [
    "application_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

## Applications

### applications-get

Returns information about a specific application.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    }
  },
  "required": [
    "application_id"
  ],
  "additionalProperties": false
}
```

### applications-get-activity-instance

Returns a serialized activity instance, if it exists. Useful for preventing unwanted activity sessions.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    },
    "instance_id": {
      "type": "string"
    }
  },
  "required": [
    "application_id",
    "instance_id"
  ],
  "additionalProperties": false
}
```

### applications-get-bot-gateway

Returns an object with the same information as Get Gateway, plus a shards key, containing the recommended number of shards to connect with.

**Request Schema:** None

### applications-get-me

Returns the application object associated with the requesting bot user.

**Request Schema:** None

### applications-get-o-auth2-me

Returns the OAuth2 application object associated with the requesting bot user.

**Request Schema:** None

### applications-update

Updates an application. Returns the updated application object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    },
    "ApplicationFormPartial": {
      "type": "object",
      "properties": {
        "description": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "default": {
                  "type": "string"
                },
                "localizations": {
                  "anyOf": [
                    {
                      "type": "object",
                      "additionalProperties": {
                        "type": "string"
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "required": [
                "default"
              ],
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "icon": {
          "type": [
            "string",
            "null"
          ]
        },
        "cover_image": {
          "type": [
            "string",
            "null"
          ]
        },
        "team_id": {
          "type": [
            "string",
            "null"
          ]
        },
        "flags": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "interactions_endpoint_url": {
          "type": [
            "string",
            "null"
          ]
        },
        "explicit_content_filter": {
          "anyOf": [
            {
              "type": "number",
              "const": 0
            },
            {
              "type": "null"
            }
          ]
        },
        "max_participants": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "type": {
          "anyOf": [
            {
              "type": "number",
              "const": 4
            },
            {
              "type": "null"
            }
          ]
        },
        "tags": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "custom_install_url": {
          "type": [
            "string",
            "null"
          ]
        },
        "install_params": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "scopes": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "permissions": {
                  "anyOf": [
                    {
                      "type": "integer"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "role_connections_verification_url": {
          "type": [
            "string",
            "null"
          ]
        },
        "integration_types_config": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "oauth2_install_params": {
                        "anyOf": [
                          {
                            "$ref": "#/properties/request/properties/ApplicationFormPartial/properties/install_params/anyOf/0"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "additionalProperties": false
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "application_id",
    "ApplicationFormPartial"
  ],
  "additionalProperties": false
}
```

### applications-update-self

Edit properties of the app associated with the requesting bot user. Only properties that are passed will be updated. Returns the updated application object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "description": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "default": {
              "type": "string"
            },
            "localizations": {
              "anyOf": [
                {
                  "type": "object",
                  "additionalProperties": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "required": [
            "default"
          ],
          "additionalProperties": false
        },
        {
          "type": "null"
        }
      ]
    },
    "icon": {
      "type": [
        "string",
        "null"
      ]
    },
    "cover_image": {
      "type": [
        "string",
        "null"
      ]
    },
    "team_id": {
      "type": [
        "string",
        "null"
      ]
    },
    "flags": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ]
    },
    "interactions_endpoint_url": {
      "type": [
        "string",
        "null"
      ]
    },
    "explicit_content_filter": {
      "anyOf": [
        {
          "type": "number",
          "const": 0
        },
        {
          "type": "null"
        }
      ]
    },
    "max_participants": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ]
    },
    "type": {
      "anyOf": [
        {
          "type": "number",
          "const": 4
        },
        {
          "type": "null"
        }
      ]
    },
    "tags": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        {
          "type": "null"
        }
      ]
    },
    "custom_install_url": {
      "type": [
        "string",
        "null"
      ]
    },
    "install_params": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "scopes": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "permissions": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "additionalProperties": false
        },
        {
          "type": "null"
        }
      ]
    },
    "role_connections_verification_url": {
      "type": [
        "string",
        "null"
      ]
    },
    "integration_types_config": {
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": {
            "anyOf": [
              {
                "type": "object",
                "properties": {
                  "oauth2_install_params": {
                    "anyOf": [
                      {
                        "$ref": "#/properties/request/properties/install_params/anyOf/0"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              },
              {
                "type": "null"
              }
            ]
          }
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "additionalProperties": false
}
```

## Audit

### audit-logs-list

Returns an audit log object for the guild. Requires the VIEW_AUDIT_LOG permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    },
    "target_id": {
      "type": "string"
    },
    "action_type": {
      "type": "integer"
    },
    "before": {
      "type": "string"
    },
    "after": {
      "type": "string"
    },
    "limit": {
      "type": "integer"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

## Auto

### auto-moderation-create-rule

Create a new rule. Returns an auto moderation rule on success. Fires an Auto Moderation Rule Create Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "event_type": {
              "type": "number",
              "const": 1
            },
            "actions": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "number",
                            "const": 1
                          },
                          "metadata": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "custom_message": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  }
                                },
                                "additionalProperties": false
                              },
                              {
                                "type": "null"
                              }
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "number",
                            "const": 1
                          },
                          "metadata": {
                            "type": "object",
                            "properties": {
                              "channel_id": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "channel_id"
                            ],
                            "additionalProperties": false
                          }
                        },
                        "required": [
                          "metadata"
                        ],
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "number",
                            "const": 1
                          },
                          "metadata": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {},
                                "additionalProperties": false
                              },
                              {
                                "type": "null"
                              }
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "number",
                            "const": 1
                          },
                          "metadata": {
                            "type": "object",
                            "properties": {
                              "duration_seconds": {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "null"
                                  }
                                ]
                              }
                            },
                            "additionalProperties": false
                          }
                        },
                        "required": [
                          "metadata"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "enabled": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "exempt_roles": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "exempt_channels": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "trigger_type": {
              "type": "number",
              "const": 1
            },
            "trigger_metadata": {
              "type": "object",
              "properties": {
                "allow_list": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "presets": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": "integer"
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "additionalProperties": false
            }
          },
          "required": [
            "name",
            "trigger_metadata"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "event_type": {
              "type": "number",
              "const": 1
            },
            "actions": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/0"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/1"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/2"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/3"
                      }
                    ]
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "enabled": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "exempt_roles": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "exempt_channels": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "trigger_type": {
              "type": "number",
              "const": 1
            },
            "trigger_metadata": {
              "anyOf": [
                {
                  "type": "object",
                  "properties": {
                    "keyword_filter": {
                      "anyOf": [
                        {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "regex_patterns": {
                      "anyOf": [
                        {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "allow_list": {
                      "anyOf": [
                        {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        {
                          "type": "null"
                        }
                      ]
                    }
                  },
                  "additionalProperties": false
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "required": [
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "event_type": {
              "type": "number",
              "const": 1
            },
            "actions": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/0"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/1"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/2"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/3"
                      }
                    ]
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "enabled": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "exempt_roles": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "exempt_channels": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "trigger_type": {
              "type": "number",
              "const": 1
            },
            "trigger_metadata": {
              "anyOf": [
                {
                  "type": "object",
                  "properties": {},
                  "additionalProperties": false
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "required": [
            "name"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "event_type": {
              "type": "number",
              "const": 1
            },
            "actions": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/0"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/1"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/2"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/3"
                      }
                    ]
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "enabled": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "exempt_roles": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "exempt_channels": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "trigger_type": {
              "type": "number",
              "const": 1
            },
            "trigger_metadata": {
              "anyOf": [
                {
                  "type": "object",
                  "properties": {
                    "mention_total_limit": {
                      "type": "integer"
                    },
                    "mention_raid_protection_enabled": {
                      "type": [
                        "boolean",
                        "null"
                      ]
                    }
                  },
                  "required": [
                    "mention_total_limit"
                  ],
                  "additionalProperties": false
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "required": [
            "name"
          ],
          "additionalProperties": false
        }
      ]
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### auto-moderation-delete-rule

Delete a rule. Returns a 204 on success. Fires an Auto Moderation Rule Delete Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "rule_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "rule_id"
  ],
  "additionalProperties": false
}
```

### auto-moderation-get-rule

Get a single rule. Returns an auto moderation rule object. This endpoint requires the MANAGE_GUILD permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "rule_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "rule_id"
  ],
  "additionalProperties": false
}
```

### auto-moderation-list-rules

Get a list of all rules currently configured for the guild. Returns a list of auto moderation rule objects for the given guild. This endpoint requires the MANAGE_GUILD permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### auto-moderation-update-rule

Modify an existing rule. Returns an auto moderation rule on success. Fires an Auto Moderation Rule Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "rule_id": {
      "type": "string"
    },
    "RequestBody": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "event_type": {
              "type": "number",
              "const": 1
            },
            "actions": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "number",
                            "const": 1
                          },
                          "metadata": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "custom_message": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  }
                                },
                                "additionalProperties": false
                              },
                              {
                                "type": "null"
                              }
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "number",
                            "const": 1
                          },
                          "metadata": {
                            "type": "object",
                            "properties": {
                              "channel_id": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "channel_id"
                            ],
                            "additionalProperties": false
                          }
                        },
                        "required": [
                          "metadata"
                        ],
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "number",
                            "const": 1
                          },
                          "metadata": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {},
                                "additionalProperties": false
                              },
                              {
                                "type": "null"
                              }
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": "number",
                            "const": 1
                          },
                          "metadata": {
                            "type": "object",
                            "properties": {
                              "duration_seconds": {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "null"
                                  }
                                ]
                              }
                            },
                            "additionalProperties": false
                          }
                        },
                        "required": [
                          "metadata"
                        ],
                        "additionalProperties": false
                      }
                    ]
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "enabled": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "exempt_roles": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "exempt_channels": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "trigger_type": {
              "type": "number",
              "const": 1
            },
            "trigger_metadata": {
              "type": "object",
              "properties": {
                "allow_list": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "presets": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": "integer"
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "event_type": {
              "type": "number",
              "const": 1
            },
            "actions": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/0"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/1"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/2"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/3"
                      }
                    ]
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "enabled": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "exempt_roles": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "exempt_channels": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "trigger_type": {
              "type": "number",
              "const": 1
            },
            "trigger_metadata": {
              "anyOf": [
                {
                  "type": "object",
                  "properties": {
                    "keyword_filter": {
                      "anyOf": [
                        {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "regex_patterns": {
                      "anyOf": [
                        {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        {
                          "type": "null"
                        }
                      ]
                    },
                    "allow_list": {
                      "anyOf": [
                        {
                          "type": "array",
                          "items": {
                            "type": "string"
                          }
                        },
                        {
                          "type": "null"
                        }
                      ]
                    }
                  },
                  "additionalProperties": false
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "event_type": {
              "type": "number",
              "const": 1
            },
            "actions": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/0"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/1"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/2"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/3"
                      }
                    ]
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "enabled": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "exempt_roles": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "exempt_channels": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "trigger_type": {
              "type": "number",
              "const": 1
            },
            "trigger_metadata": {
              "anyOf": [
                {
                  "type": "object",
                  "properties": {},
                  "additionalProperties": false
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "event_type": {
              "type": "number",
              "const": 1
            },
            "actions": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "anyOf": [
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/0"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/1"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/2"
                      },
                      {
                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/actions/anyOf/0/items/anyOf/3"
                      }
                    ]
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "enabled": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "exempt_roles": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "exempt_channels": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "trigger_type": {
              "type": "number",
              "const": 1
            },
            "trigger_metadata": {
              "anyOf": [
                {
                  "type": "object",
                  "properties": {
                    "mention_total_limit": {
                      "type": "integer"
                    },
                    "mention_raid_protection_enabled": {
                      "type": [
                        "boolean",
                        "null"
                      ]
                    }
                  },
                  "required": [
                    "mention_total_limit"
                  ],
                  "additionalProperties": false
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "additionalProperties": false
        }
      ]
    }
  },
  "required": [
    "guild_id",
    "rule_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

## Channels

### channels-add-group-dm-recipient

Adds a recipient to a Group DM using their access token.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "access_token": {
          "type": [
            "string",
            "null"
          ]
        },
        "nick": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "user_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### channels-add-thread-member

Adds another member to a thread. Requires the ability to send messages in the thread. Also requires the thread is not archived. Returns a 204 empty response if the member is successfully added or was already a member of the thread. Fires a Thread Members Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "user_id"
  ],
  "additionalProperties": false
}
```

### channels-create-invite

Create a new invite object for the channel.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "RequestBody": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "max_age": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "max_age": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "temporary": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "max_uses": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "unique": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "target_user_id": {
              "type": [
                "string",
                "null"
              ]
            },
            "target_application_id": {
              "type": [
                "string",
                "null"
              ]
            },
            "target_type": {
              "type": "number",
              "const": 1
            }
          },
          "additionalProperties": false
        }
      ]
    }
  },
  "required": [
    "channel_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### channels-delete

Delete a channel, or close a private message. Requires the MANAGE_CHANNELS permission for the guild, or MANAGE_THREADS if the channel is a thread. Returns a channel object on success. Fires a Channel Delete Gateway event (or Thread Delete if the channel was a thread).

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### channels-delete-permission-overwrite

Delete a channel permission overwrite for a user or role in a channel. Only usable for guild channels. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Channel Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "overwrite_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "overwrite_id"
  ],
  "additionalProperties": false
}
```

### channels-follow

Follow an Announcement Channel to send messages to a target channel. Requires the MANAGE_WEBHOOKS permission in the target channel. Returns a followed channel object. Fires a Webhooks Update Gateway event for the target channel.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "webhook_channel_id": {
          "type": "string"
        }
      },
      "required": [
        "webhook_channel_id"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### channels-get

Returns a channel object for the given channel ID.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### channels-get-thread-member

Returns a thread member object for the specified user if they are a member of the thread, returns a 404 response otherwise.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    },
    "with_member": {
      "type": "boolean"
    }
  },
  "required": [
    "channel_id",
    "user_id"
  ],
  "additionalProperties": false
}
```

### channels-join-thread

Adds the current user to a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update and a Thread Create Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### channels-leave-thread

Removes the current user from a thread. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### channels-list-invites

Returns a list of invite objects (with invite metadata) for the channel.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### channels-list-joined-private-archived-threads

Returns archived threads in the channel that are of type PRIVATE_THREAD, and the user has joined. Threads are ordered by their id, in descending order. Requires the READ_MESSAGE_HISTORY permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "before": {
      "type": "string"
    },
    "limit": {
      "type": "integer"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### channels-list-pinned-messages

Returns all pinned messages in the channel as an array of message objects.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### channels-list-private-archived-threads

Returns archived threads in the channel that are of type PRIVATE_THREAD. Threads are ordered by archive_timestamp, in descending order. Requires both the READ_MESSAGE_HISTORY and MANAGE_THREADS permissions.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "before": {
      "type": "string",
      "format": "date-time"
    },
    "limit": {
      "type": "integer"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### channels-list-public-archived-threads

Returns archived threads in the channel that are public. When called on a GUILD_TEXT channel, returns threads of type PUBLIC_THREAD. When called on a GUILD_ANNOUNCEMENT channel returns threads of type ANNOUNCEMENT_THREAD. Threads are ordered by archive_timestamp, in descending order. Requires the READ_MESSAGE_HISTORY permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "before": {
      "type": "string",
      "format": "date-time"
    },
    "limit": {
      "type": "integer"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### channels-list-thread-members

Returns array of thread member objects that are members of the thread.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "with_member": {
      "type": "boolean"
    },
    "limit": {
      "type": "integer"
    },
    "after": {
      "type": "string"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### channels-pin-message

Pin a message in a channel. Requires the MANAGE_MESSAGES permission. Returns a 204 empty response on success. Fires a Channel Pins Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "message_id"
  ],
  "additionalProperties": false
}
```

### channels-remove-group-dm-recipient

Removes a recipient from a Group DM.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "user_id"
  ],
  "additionalProperties": false
}
```

### channels-remove-thread-member

Removes another member from a thread. Requires the MANAGE_THREADS permission, or the creator of the thread if it is a PRIVATE_THREAD. Also requires the thread is not archived. Returns a 204 empty response on success. Fires a Thread Members Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "user_id"
  ],
  "additionalProperties": false
}
```

### channels-search-threads

Search for threads in a channel.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "name": {
      "type": "string"
    },
    "slop": {
      "type": "integer"
    },
    "min_id": {
      "type": "string"
    },
    "max_id": {
      "type": "string"
    },
    "tag": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      ]
    },
    "tag_setting": {
      "type": "string"
    },
    "archived": {
      "type": "boolean"
    },
    "sort_by": {
      "type": "string",
      "const": "relevance"
    },
    "sort_order": {
      "type": "string",
      "const": "asc"
    },
    "limit": {
      "type": "integer"
    },
    "offset": {
      "type": "integer"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### channels-set-permission-overwrite

Edit the channel permission overwrites for a user or role in a channel. Only usable for guild channels. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Channel Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "overwrite_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "type": {
          "anyOf": [
            {
              "type": "number",
              "const": 0
            },
            {
              "type": "null"
            }
          ]
        },
        "allow": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "deny": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "overwrite_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### channels-start-thread

Creates a new thread that is not connected to an existing message. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters. Fires a Thread Create Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "RequestBody": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "auto_archive_duration": {
              "anyOf": [
                {
                  "type": "number",
                  "const": 60
                },
                {
                  "type": "null"
                }
              ]
            },
            "rate_limit_per_user": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "applied_tags": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "message": {
              "type": "object",
              "properties": {
                "content": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "embeds": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "title": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "color": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "timestamp": {
                            "anyOf": [
                              {
                                "type": "string",
                                "format": "date-time"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "author": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "name": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "url": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "icon_url": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  }
                                },
                                "additionalProperties": false
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "image": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "url": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "width": {
                                    "anyOf": [
                                      {
                                        "type": "integer"
                                      },
                                      {
                                        "type": "null"
                                      }
                                    ]
                                  },
                                  "height": {
                                    "anyOf": [
                                      {
                                        "type": "integer"
                                      },
                                      {
                                        "type": "null"
                                      }
                                    ]
                                  },
                                  "placeholder": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "placeholder_version": {
                                    "anyOf": [
                                      {
                                        "type": "integer"
                                      },
                                      {
                                        "type": "null"
                                      }
                                    ]
                                  },
                                  "is_animated": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ]
                                  },
                                  "description": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  }
                                },
                                "additionalProperties": false
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "thumbnail": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "url": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "width": {
                                    "anyOf": [
                                      {
                                        "type": "integer"
                                      },
                                      {
                                        "type": "null"
                                      }
                                    ]
                                  },
                                  "height": {
                                    "anyOf": [
                                      {
                                        "type": "integer"
                                      },
                                      {
                                        "type": "null"
                                      }
                                    ]
                                  },
                                  "placeholder": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "placeholder_version": {
                                    "anyOf": [
                                      {
                                        "type": "integer"
                                      },
                                      {
                                        "type": "null"
                                      }
                                    ]
                                  },
                                  "is_animated": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ]
                                  },
                                  "description": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  }
                                },
                                "additionalProperties": false
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "footer": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "text": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "icon_url": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  }
                                },
                                "additionalProperties": false
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "fields": {
                            "anyOf": [
                              {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "name": {
                                      "type": "string"
                                    },
                                    "value": {
                                      "type": "string"
                                    },
                                    "inline": {
                                      "type": [
                                        "boolean",
                                        "null"
                                      ]
                                    }
                                  },
                                  "required": [
                                    "name",
                                    "value"
                                  ],
                                  "additionalProperties": false
                                }
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "provider": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "name": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "url": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  }
                                },
                                "additionalProperties": false
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "video": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "url": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "width": {
                                    "anyOf": [
                                      {
                                        "type": "integer"
                                      },
                                      {
                                        "type": "null"
                                      }
                                    ]
                                  },
                                  "height": {
                                    "anyOf": [
                                      {
                                        "type": "integer"
                                      },
                                      {
                                        "type": "null"
                                      }
                                    ]
                                  },
                                  "placeholder": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "placeholder_version": {
                                    "anyOf": [
                                      {
                                        "type": "integer"
                                      },
                                      {
                                        "type": "null"
                                      }
                                    ]
                                  },
                                  "is_animated": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ]
                                  },
                                  "description": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  }
                                },
                                "additionalProperties": false
                              },
                              {
                                "type": "null"
                              }
                            ]
                          }
                        },
                        "additionalProperties": false
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "allowed_mentions": {
                  "anyOf": [
                    {
                      "type": "object",
                      "properties": {
                        "parse": {
                          "anyOf": [
                            {
                              "type": "array",
                              "items": {
                                "type": [
                                  "string",
                                  "null"
                                ]
                              }
                            },
                            {
                              "type": "null"
                            }
                          ]
                        },
                        "users": {
                          "anyOf": [
                            {
                              "type": "array",
                              "items": {
                                "type": [
                                  "string",
                                  "null"
                                ]
                              }
                            },
                            {
                              "type": "null"
                            }
                          ]
                        },
                        "roles": {
                          "anyOf": [
                            {
                              "type": "array",
                              "items": {
                                "type": [
                                  "string",
                                  "null"
                                ]
                              }
                            },
                            {
                              "type": "null"
                            }
                          ]
                        },
                        "replied_user": {
                          "type": [
                            "boolean",
                            "null"
                          ]
                        }
                      },
                      "additionalProperties": false
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "sticker_ids": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": "string"
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "components": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "anyOf": [
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "number",
                                "const": 1
                              },
                              "components": {
                                "type": "array",
                                "items": {
                                  "anyOf": [
                                    {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "number",
                                          "const": 1
                                        },
                                        "custom_id": {
                                          "type": "string"
                                        },
                                        "placeholder": {
                                          "type": [
                                            "string",
                                            "null"
                                          ]
                                        },
                                        "min_values": {
                                          "anyOf": [
                                            {
                                              "type": "integer"
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        },
                                        "max_values": {
                                          "anyOf": [
                                            {
                                              "type": "integer"
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        },
                                        "disabled": {
                                          "type": [
                                            "boolean",
                                            "null"
                                          ]
                                        },
                                        "default_values": {
                                          "anyOf": [
                                            {
                                              "type": "array",
                                              "items": {
                                                "anyOf": [
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "string",
                                                        "const": "user"
                                                      },
                                                      "id": {
                                                        "type": "string"
                                                      }
                                                    },
                                                    "required": [
                                                      "id"
                                                    ],
                                                    "additionalProperties": false
                                                  },
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "type": {
                                                        "type": "string",
                                                        "const": "user"
                                                      },
                                                      "id": {
                                                        "type": "string"
                                                      }
                                                    },
                                                    "required": [
                                                      "id"
                                                    ],
                                                    "additionalProperties": false
                                                  }
                                                ]
                                              }
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        }
                                      },
                                      "required": [
                                        "custom_id"
                                      ],
                                      "additionalProperties": false
                                    },
                                    {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "number",
                                          "const": 1
                                        },
                                        "custom_id": {
                                          "type": "string"
                                        },
                                        "placeholder": {
                                          "type": [
                                            "string",
                                            "null"
                                          ]
                                        },
                                        "min_values": {
                                          "anyOf": [
                                            {
                                              "type": "integer"
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        },
                                        "max_values": {
                                          "anyOf": [
                                            {
                                              "type": "integer"
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        },
                                        "disabled": {
                                          "type": [
                                            "boolean",
                                            "null"
                                          ]
                                        },
                                        "default_values": {
                                          "anyOf": [
                                            {
                                              "type": "array",
                                              "items": {
                                                "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/message/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/0"
                                              }
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        }
                                      },
                                      "required": [
                                        "custom_id"
                                      ],
                                      "additionalProperties": false
                                    },
                                    {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "number",
                                          "const": 1
                                        },
                                        "custom_id": {
                                          "type": "string"
                                        },
                                        "placeholder": {
                                          "type": [
                                            "string",
                                            "null"
                                          ]
                                        },
                                        "min_values": {
                                          "anyOf": [
                                            {
                                              "type": "integer"
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        },
                                        "max_values": {
                                          "anyOf": [
                                            {
                                              "type": "integer"
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        },
                                        "disabled": {
                                          "type": [
                                            "boolean",
                                            "null"
                                          ]
                                        },
                                        "options": {
                                          "type": "array",
                                          "items": {
                                            "type": "object",
                                            "properties": {
                                              "label": {
                                                "type": "string"
                                              },
                                              "value": {
                                                "type": "string"
                                              },
                                              "description": {
                                                "type": [
                                                  "string",
                                                  "null"
                                                ]
                                              },
                                              "default": {
                                                "type": [
                                                  "boolean",
                                                  "null"
                                                ]
                                              },
                                              "emoji": {
                                                "anyOf": [
                                                  {
                                                    "type": "object",
                                                    "properties": {
                                                      "id": {
                                                        "type": [
                                                          "string",
                                                          "null"
                                                        ]
                                                      },
                                                      "name": {
                                                        "type": "string"
                                                      }
                                                    },
                                                    "required": [
                                                      "name"
                                                    ],
                                                    "additionalProperties": false
                                                  },
                                                  {
                                                    "type": "null"
                                                  }
                                                ]
                                              }
                                            },
                                            "required": [
                                              "label",
                                              "value"
                                            ],
                                            "additionalProperties": false
                                          }
                                        }
                                      },
                                      "required": [
                                        "custom_id",
                                        "options"
                                      ],
                                      "additionalProperties": false
                                    },
                                    {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "number",
                                          "const": 1
                                        },
                                        "custom_id": {
                                          "type": "string"
                                        },
                                        "placeholder": {
                                          "type": [
                                            "string",
                                            "null"
                                          ]
                                        },
                                        "min_values": {
                                          "anyOf": [
                                            {
                                              "type": "integer"
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        },
                                        "max_values": {
                                          "anyOf": [
                                            {
                                              "type": "integer"
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        },
                                        "disabled": {
                                          "type": [
                                            "boolean",
                                            "null"
                                          ]
                                        },
                                        "default_values": {
                                          "anyOf": [
                                            {
                                              "type": "array",
                                              "items": {
                                                "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/message/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/1"
                                              }
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        }
                                      },
                                      "required": [
                                        "custom_id"
                                      ],
                                      "additionalProperties": false
                                    },
                                    {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "number",
                                          "const": 1
                                        },
                                        "custom_id": {
                                          "type": [
                                            "string",
                                            "null"
                                          ]
                                        },
                                        "style": {
                                          "type": "number",
                                          "const": 1
                                        },
                                        "label": {
                                          "type": [
                                            "string",
                                            "null"
                                          ]
                                        },
                                        "disabled": {
                                          "type": [
                                            "boolean",
                                            "null"
                                          ]
                                        },
                                        "url": {
                                          "type": [
                                            "string",
                                            "null"
                                          ]
                                        },
                                        "sku_id": {
                                          "type": [
                                            "string",
                                            "null"
                                          ]
                                        },
                                        "emoji": {
                                          "anyOf": [
                                            {
                                              "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/message/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/2/properties/options/items/properties/emoji/anyOf/0"
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        }
                                      },
                                      "additionalProperties": false
                                    },
                                    {
                                      "type": "object",
                                      "properties": {
                                        "type": {
                                          "type": "number",
                                          "const": 1
                                        },
                                        "custom_id": {
                                          "type": "string"
                                        },
                                        "placeholder": {
                                          "type": [
                                            "string",
                                            "null"
                                          ]
                                        },
                                        "min_values": {
                                          "anyOf": [
                                            {
                                              "type": "integer"
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        },
                                        "max_values": {
                                          "anyOf": [
                                            {
                                              "type": "integer"
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        },
                                        "disabled": {
                                          "type": [
                                            "boolean",
                                            "null"
                                          ]
                                        },
                                        "default_values": {
                                          "anyOf": [
                                            {
                                              "type": "array",
                                              "items": {
                                                "type": "object",
                                                "properties": {
                                                  "type": {
                                                    "type": "string",
                                                    "const": "user"
                                                  },
                                                  "id": {
                                                    "type": "string"
                                                  }
                                                },
                                                "required": [
                                                  "id"
                                                ],
                                                "additionalProperties": false
                                              }
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        },
                                        "channel_types": {
                                          "anyOf": [
                                            {
                                              "type": "array",
                                              "items": {
                                                "type": "number",
                                                "enum": [
                                                  0,
                                                  1,
                                                  2,
                                                  3,
                                                  4,
                                                  5,
                                                  7,
                                                  10,
                                                  11,
                                                  12,
                                                  13,
                                                  14,
                                                  15
                                                ]
                                              }
                                            },
                                            {
                                              "type": "null"
                                            }
                                          ]
                                        }
                                      },
                                      "required": [
                                        "custom_id"
                                      ],
                                      "additionalProperties": false
                                    }
                                  ]
                                }
                              }
                            },
                            "required": [
                              "components"
                            ],
                            "additionalProperties": false
                          },
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "number",
                                "const": 1
                              },
                              "items": {
                                "type": "array",
                                "items": {
                                  "type": "object",
                                  "properties": {
                                    "description": {
                                      "type": [
                                        "string",
                                        "null"
                                      ]
                                    },
                                    "spoiler": {
                                      "type": [
                                        "boolean",
                                        "null"
                                      ]
                                    },
                                    "media": {
                                      "type": "object",
                                      "properties": {
                                        "url": {
                                          "type": "string"
                                        }
                                      },
                                      "required": [
                                        "url"
                                      ],
                                      "additionalProperties": false
                                    }
                                  },
                                  "required": [
                                    "media"
                                  ],
                                  "additionalProperties": false
                                }
                              }
                            },
                            "required": [
                              "items"
                            ],
                            "additionalProperties": false
                          },
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "number",
                                "const": 1
                              },
                              "content": {
                                "type": "string"
                              }
                            },
                            "required": [
                              "content"
                            ],
                            "additionalProperties": false
                          },
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "number",
                                "const": 1
                              },
                              "spoiler": {
                                "type": [
                                  "boolean",
                                  "null"
                                ]
                              },
                              "file": {
                                "type": "object",
                                "properties": {
                                  "url": {
                                    "type": "string"
                                  }
                                },
                                "required": [
                                  "url"
                                ],
                                "additionalProperties": false
                              }
                            },
                            "required": [
                              "file"
                            ],
                            "additionalProperties": false
                          },
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "number",
                                "const": 1
                              },
                              "components": {
                                "type": "array",
                                "items": {
                                  "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/message/properties/components/anyOf/0/items/anyOf/2"
                                }
                              },
                              "accessory": {
                                "anyOf": [
                                  {
                                    "type": "object",
                                    "properties": {
                                      "type": {
                                        "type": "number",
                                        "const": 1
                                      },
                                      "description": {
                                        "type": [
                                          "string",
                                          "null"
                                        ]
                                      },
                                      "spoiler": {
                                        "type": [
                                          "boolean",
                                          "null"
                                        ]
                                      },
                                      "media": {
                                        "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/message/properties/components/anyOf/0/items/anyOf/1/properties/items/items/properties/media"
                                      }
                                    },
                                    "required": [
                                      "media"
                                    ],
                                    "additionalProperties": false
                                  },
                                  {
                                    "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/message/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/4"
                                  }
                                ]
                              }
                            },
                            "required": [
                              "components",
                              "accessory"
                            ],
                            "additionalProperties": false
                          },
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "number",
                                "const": 1
                              },
                              "spacing": {
                                "anyOf": [
                                  {
                                    "type": "number",
                                    "const": 1
                                  },
                                  {
                                    "type": "null"
                                  }
                                ]
                              },
                              "divider": {
                                "type": [
                                  "boolean",
                                  "null"
                                ]
                              }
                            },
                            "additionalProperties": false
                          },
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "number",
                                "const": 1
                              },
                              "accent_color": {
                                "anyOf": [
                                  {
                                    "type": "integer"
                                  },
                                  {
                                    "type": "null"
                                  }
                                ]
                              },
                              "components": {
                                "type": "array",
                                "items": {
                                  "anyOf": [
                                    {
                                      "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/message/properties/components/anyOf/0/items/anyOf/0"
                                    },
                                    {
                                      "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/message/properties/components/anyOf/0/items/anyOf/1"
                                    },
                                    {
                                      "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/message/properties/components/anyOf/0/items/anyOf/2"
                                    },
                                    {
                                      "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/message/properties/components/anyOf/0/items/anyOf/3"
                                    },
                                    {
                                      "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/message/properties/components/anyOf/0/items/anyOf/4"
                                    },
                                    {
                                      "$ref": "#/properties/request/properties/RequestBody/anyOf/0/properties/message/properties/components/anyOf/0/items/anyOf/5"
                                    }
                                  ]
                                }
                              },
                              "spoiler": {
                                "type": [
                                  "boolean",
                                  "null"
                                ]
                              }
                            },
                            "required": [
                              "components"
                            ],
                            "additionalProperties": false
                          }
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "flags": {
                  "anyOf": [
                    {
                      "type": "integer"
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "attachments": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": "object",
                        "properties": {
                          "id": {
                            "type": "string"
                          },
                          "filename": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "duration_secs": {
                            "type": [
                              "number",
                              "null"
                            ]
                          },
                          "waveform": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "title": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "is_remix": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          }
                        },
                        "required": [
                          "id"
                        ],
                        "additionalProperties": false
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "poll": {
                  "anyOf": [
                    {
                      "type": "object",
                      "properties": {
                        "question": {
                          "type": "object",
                          "properties": {
                            "text": {
                              "type": [
                                "string",
                                "null"
                              ]
                            },
                            "emoji": {
                              "anyOf": [
                                {
                                  "type": "object",
                                  "properties": {
                                    "id": {
                                      "type": [
                                        "string",
                                        "null"
                                      ]
                                    },
                                    "name": {
                                      "type": [
                                        "string",
                                        "null"
                                      ]
                                    },
                                    "animated": {
                                      "type": [
                                        "boolean",
                                        "null"
                                      ]
                                    }
                                  },
                                  "additionalProperties": false
                                },
                                {
                                  "type": "null"
                                }
                              ]
                            }
                          },
                          "additionalProperties": false
                        },
                        "answers": {
                          "type": "array",
                          "items": {
                            "type": "object",
                            "properties": {
                              "poll_media": {
                                "type": "object",
                                "properties": {
                                  "text": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "emoji": {
                                    "anyOf": [
                                      {
                                        "type": "object",
                                        "properties": {
                                          "id": {
                                            "type": [
                                              "string",
                                              "null"
                                            ]
                                          },
                                          "name": {
                                            "type": [
                                              "string",
                                              "null"
                                            ]
                                          },
                                          "animated": {
                                            "type": [
                                              "boolean",
                                              "null"
                                            ]
                                          }
                                        },
                                        "additionalProperties": false
                                      },
                                      {
                                        "type": "null"
                                      }
                                    ]
                                  }
                                },
                                "additionalProperties": false
                              }
                            },
                            "required": [
                              "poll_media"
                            ],
                            "additionalProperties": false
                          }
                        },
                        "allow_multiselect": {
                          "type": [
                            "boolean",
                            "null"
                          ]
                        },
                        "layout_type": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "null"
                            }
                          ]
                        },
                        "duration": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "null"
                            }
                          ]
                        }
                      },
                      "required": [
                        "question",
                        "answers"
                      ],
                      "additionalProperties": false
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "confetti_potion": {
                  "anyOf": [
                    {
                      "type": "object",
                      "properties": {},
                      "additionalProperties": false
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "additionalProperties": false
            }
          },
          "required": [
            "name",
            "message"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "auto_archive_duration": {
              "anyOf": [
                {
                  "type": "number",
                  "const": 60
                },
                {
                  "type": "null"
                }
              ]
            },
            "rate_limit_per_user": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "type": {
              "type": "number",
              "enum": [
                0,
                1,
                2,
                3,
                4,
                5,
                7,
                10,
                11,
                12,
                13,
                14,
                15
              ]
            },
            "invitable": {
              "type": [
                "boolean",
                "null"
              ]
            }
          },
          "required": [
            "name"
          ],
          "additionalProperties": false
        }
      ]
    }
  },
  "required": [
    "channel_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### channels-start-thread-from-message

Creates a new thread from an existing message. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters. Fires a Thread Create and a Message Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    },
    "CreateTextThreadWithMessageRequest": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "auto_archive_duration": {
          "anyOf": [
            {
              "type": "number",
              "const": 60
            },
            {
              "type": "null"
            }
          ]
        },
        "rate_limit_per_user": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "message_id",
    "CreateTextThreadWithMessageRequest"
  ],
  "additionalProperties": false
}
```

### channels-trigger-typing-indicator

Post a typing indicator for the specified channel, which expires after 10 seconds. Returns a 204 empty response on success. Fires a Typing Start Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### channels-unpin-message

Unpin a message in a channel. Requires the MANAGE_MESSAGES permission. Returns a 204 empty response on success. Fires a Channel Pins Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "message_id"
  ],
  "additionalProperties": false
}
```

### channels-update

Update a channel's settings. Returns a channel on success, and a 400 BAD REQUEST on invalid parameters.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "RequestBody": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "name": {
              "type": [
                "string",
                "null"
              ]
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": [
                "string",
                "null"
              ]
            },
            "icon": {
              "type": [
                "string",
                "null"
              ]
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": [
                "string",
                "null"
              ]
            },
            "archived": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "locked": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "invitable": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "auto_archive_duration": {
              "anyOf": [
                {
                  "type": "number",
                  "const": 60
                },
                {
                  "type": "null"
                }
              ]
            },
            "rate_limit_per_user": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "flags": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "applied_tags": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "string"
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "bitrate": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "user_limit": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "rtc_region": {
              "type": [
                "string",
                "null"
              ]
            },
            "video_quality_mode": {
              "anyOf": [
                {
                  "type": "number",
                  "const": 1
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "type": {
              "type": "number",
              "enum": [
                0,
                1,
                2,
                3,
                4,
                5,
                7,
                10,
                11,
                12,
                13,
                14,
                15
              ]
            },
            "name": {
              "type": "string"
            },
            "position": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "topic": {
              "type": [
                "string",
                "null"
              ]
            },
            "bitrate": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "user_limit": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "nsfw": {
              "type": [
                "boolean",
                "null"
              ]
            },
            "rate_limit_per_user": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "parent_id": {
              "type": [
                "string",
                "null"
              ]
            },
            "permission_overwrites": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "id": {
                        "type": "string"
                      },
                      "type": {
                        "anyOf": [
                          {
                            "type": "number",
                            "const": 0
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "allow": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "deny": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      }
                    },
                    "required": [
                      "id"
                    ],
                    "additionalProperties": false
                  }
                },
                {
                  "type": "null"
                }
              ]
            },
            "rtc_region": {
              "type": [
                "string",
                "null"
              ]
            },
            "video_quality_mode": {
              "anyOf": [
                {
                  "type": "number",
                  "const": 1
                },
                {
                  "type": "null"
                }
              ]
            },
            "default_auto_archive_duration": {
              "anyOf": [
                {
                  "type": "number",
                  "const": 60
                },
                {
                  "type": "null"
                }
              ]
            },
            "default_reaction_emoji": {
              "anyOf": [
                {
                  "type": "object",
                  "properties": {
                    "emoji_id": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "emoji_name": {
                      "type": [
                        "string",
                        "null"
                      ]
                    }
                  },
                  "additionalProperties": false
                },
                {
                  "type": "null"
                }
              ]
            },
            "default_thread_rate_limit_per_user": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "default_sort_order": {
              "anyOf": [
                {
                  "type": "number",
                  "const": 0
                },
                {
                  "type": "null"
                }
              ]
            },
            "default_forum_layout": {
              "anyOf": [
                {
                  "type": "number",
                  "const": 0
                },
                {
                  "type": "null"
                }
              ]
            },
            "default_tag_setting": {
              "type": [
                "string",
                "null"
              ]
            },
            "flags": {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "null"
                }
              ]
            },
            "available_tags": {
              "anyOf": [
                {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "emoji_id": {
                        "type": [
                          "string",
                          "null"
                        ]
                      },
                      "emoji_name": {
                        "type": [
                          "string",
                          "null"
                        ]
                      },
                      "moderated": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      },
                      "id": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    "required": [
                      "name"
                    ],
                    "additionalProperties": false
                  }
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "additionalProperties": false
        }
      ]
    }
  },
  "required": [
    "channel_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

## Emoji

### emoji-create-application-emoji

Create a new emoji for the application. Returns the new emoji object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "image": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "image"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "application_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### emoji-create-guild-emoji

Create a new emoji for the guild. Requires the CREATE_GUILD_EXPRESSIONS permission. Returns the new emoji object on success. Fires a Guild Emojis Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "image": {
          "type": "string"
        },
        "roles": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "required": [
        "name",
        "image"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### emoji-delete-application-emoji

Delete the given emoji. Returns 204 No Content on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    },
    "emoji_id": {
      "type": "string"
    }
  },
  "required": [
    "application_id",
    "emoji_id"
  ],
  "additionalProperties": false
}
```

### emoji-delete-guild-emoji

Delete the given emoji. For emojis created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other emojis, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns 204 No Content on success. Fires a Guild Emojis Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "emoji_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "emoji_id"
  ],
  "additionalProperties": false
}
```

### emoji-get-application-emoji

Returns an emoji object for the given application and emoji IDs. Includes the user field.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    },
    "emoji_id": {
      "type": "string"
    }
  },
  "required": [
    "application_id",
    "emoji_id"
  ],
  "additionalProperties": false
}
```

### emoji-get-guild-emoji

Returns an emoji object for the given guild and emoji IDs. Includes the user field if the bot has the MANAGE_GUILD_EXPRESSIONS permission, or if the bot created the emoji and has the the CREATE_GUILD_EXPRESSIONS permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "emoji_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "emoji_id"
  ],
  "additionalProperties": false
}
```

### emoji-list-application-emojis

Returns an object containing a list of emoji objects for the given application under the items key. Includes a user object for the team member that uploaded the emoji from the app's settings, or for the bot user if uploaded using the API.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    }
  },
  "required": [
    "application_id"
  ],
  "additionalProperties": false
}
```

### emoji-list-guild-emojis

Returns a list of emoji objects for the given guild. Includes user fields if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### emoji-update-application-emoji

Modify the given emoji. Returns the updated emoji object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    },
    "emoji_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "application_id",
    "emoji_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### emoji-update-guild-emoji

Modify the given emoji. For emojis created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other emojis, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns the updated emoji object on success. Fires a Guild Emojis Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "emoji_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "roles": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "emoji_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

## Entitlements

### entitlements-create-test

Creates a test entitlement to a given SKU for a given guild or user. Discord will act as though that user or guild has entitlement to your premium offering. This endpoint returns a partial entitlement object.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    },
    "CreateEntitlementRequestData": {
      "type": "object",
      "properties": {
        "sku_id": {
          "type": "string"
        },
        "owner_id": {
          "type": "string"
        },
        "owner_type": {
          "type": "integer"
        }
      },
      "required": [
        "sku_id",
        "owner_id",
        "owner_type"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "application_id",
    "CreateEntitlementRequestData"
  ],
  "additionalProperties": false
}
```

## Guild

### guild-scheduled-events-create

Create a guild scheduled event in the guild. Returns a guild scheduled event object on success. Fires a Guild Scheduled Event Create Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "description": {
              "type": [
                "string",
                "null"
              ]
            },
            "image": {
              "type": [
                "string",
                "null"
              ]
            },
            "scheduled_start_time": {
              "type": "string",
              "format": "date-time"
            },
            "scheduled_end_time": {
              "anyOf": [
                {
                  "type": "string",
                  "format": "date-time"
                },
                {
                  "type": "null"
                }
              ]
            },
            "privacy_level": {
              "type": "number",
              "const": 2
            },
            "entity_type": {
              "type": "number",
              "const": 0
            },
            "channel_id": {
              "type": [
                "string",
                "null"
              ]
            },
            "entity_metadata": {
              "type": "object",
              "properties": {
                "location": {
                  "type": "string"
                }
              },
              "required": [
                "location"
              ],
              "additionalProperties": false
            }
          },
          "required": [
            "name",
            "scheduled_start_time",
            "entity_metadata"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "description": {
              "type": [
                "string",
                "null"
              ]
            },
            "image": {
              "type": [
                "string",
                "null"
              ]
            },
            "scheduled_start_time": {
              "type": "string",
              "format": "date-time"
            },
            "scheduled_end_time": {
              "anyOf": [
                {
                  "type": "string",
                  "format": "date-time"
                },
                {
                  "type": "null"
                }
              ]
            },
            "privacy_level": {
              "type": "number",
              "const": 2
            },
            "entity_type": {
              "type": "number",
              "const": 0
            },
            "channel_id": {
              "type": [
                "string",
                "null"
              ]
            },
            "entity_metadata": {
              "anyOf": [
                {
                  "type": "object",
                  "properties": {},
                  "additionalProperties": false
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "required": [
            "name",
            "scheduled_start_time"
          ],
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "name": {
              "type": "string"
            },
            "description": {
              "type": [
                "string",
                "null"
              ]
            },
            "image": {
              "type": [
                "string",
                "null"
              ]
            },
            "scheduled_start_time": {
              "type": "string",
              "format": "date-time"
            },
            "scheduled_end_time": {
              "anyOf": [
                {
                  "type": "string",
                  "format": "date-time"
                },
                {
                  "type": "null"
                }
              ]
            },
            "privacy_level": {
              "type": "number",
              "const": 2
            },
            "entity_type": {
              "type": "number",
              "const": 0
            },
            "channel_id": {
              "type": [
                "string",
                "null"
              ]
            },
            "entity_metadata": {
              "anyOf": [
                {
                  "type": "object",
                  "properties": {},
                  "additionalProperties": false
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "required": [
            "name",
            "scheduled_start_time"
          ],
          "additionalProperties": false
        }
      ]
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guild-scheduled-events-delete

Delete a guild scheduled event. Returns a 204 on success. Fires a Guild Scheduled Event Delete Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "guild_scheduled_event_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "guild_scheduled_event_id"
  ],
  "additionalProperties": false
}
```

### guild-scheduled-events-get

Get a guild scheduled event. Returns a guild scheduled event object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "guild_scheduled_event_id": {
      "type": "string"
    },
    "with_user_count": {
      "type": "boolean"
    }
  },
  "required": [
    "guild_id",
    "guild_scheduled_event_id"
  ],
  "additionalProperties": false
}
```

### guild-scheduled-events-get-users

Get a list of guild scheduled event users subscribed to a guild scheduled event. Returns a list of guild scheduled event user objects on success. Guild member data, if it exists, is included if the with_member query parameter is set.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "guild_scheduled_event_id": {
      "type": "string"
    },
    "with_member": {
      "type": "boolean"
    },
    "limit": {
      "type": "integer"
    },
    "before": {
      "type": "string"
    },
    "after": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "guild_scheduled_event_id"
  ],
  "additionalProperties": false
}
```

### guild-scheduled-events-list

Returns a list of guild scheduled event objects for the given guild.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "with_user_count": {
      "type": "boolean"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guild-scheduled-events-update

Modify a guild scheduled event. Returns the modified guild scheduled event object on success. Fires a Guild Scheduled Event Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "guild_scheduled_event_id": {
      "type": "string"
    },
    "RequestBody": {
      "anyOf": [
        {
          "type": "object",
          "properties": {
            "status": {
              "anyOf": [
                {
                  "type": "number",
                  "const": 1
                },
                {
                  "type": "null"
                }
              ]
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": [
                "string",
                "null"
              ]
            },
            "image": {
              "type": [
                "string",
                "null"
              ]
            },
            "scheduled_start_time": {
              "type": "string",
              "format": "date-time"
            },
            "scheduled_end_time": {
              "anyOf": [
                {
                  "type": "string",
                  "format": "date-time"
                },
                {
                  "type": "null"
                }
              ]
            },
            "entity_type": {
              "type": "number",
              "const": 0
            },
            "privacy_level": {
              "type": "number",
              "const": 2
            },
            "channel_id": {
              "type": [
                "string",
                "null"
              ]
            },
            "entity_metadata": {
              "type": "object",
              "properties": {
                "location": {
                  "type": "string"
                }
              },
              "required": [
                "location"
              ],
              "additionalProperties": false
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "status": {
              "anyOf": [
                {
                  "type": "number",
                  "const": 1
                },
                {
                  "type": "null"
                }
              ]
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": [
                "string",
                "null"
              ]
            },
            "image": {
              "type": [
                "string",
                "null"
              ]
            },
            "scheduled_start_time": {
              "type": "string",
              "format": "date-time"
            },
            "scheduled_end_time": {
              "anyOf": [
                {
                  "type": "string",
                  "format": "date-time"
                },
                {
                  "type": "null"
                }
              ]
            },
            "entity_type": {
              "type": "number",
              "const": 0
            },
            "privacy_level": {
              "type": "number",
              "const": 2
            },
            "channel_id": {
              "type": [
                "string",
                "null"
              ]
            },
            "entity_metadata": {
              "anyOf": [
                {
                  "type": "object",
                  "properties": {},
                  "additionalProperties": false
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "additionalProperties": false
        },
        {
          "type": "object",
          "properties": {
            "status": {
              "anyOf": [
                {
                  "type": "number",
                  "const": 1
                },
                {
                  "type": "null"
                }
              ]
            },
            "name": {
              "type": "string"
            },
            "description": {
              "type": [
                "string",
                "null"
              ]
            },
            "image": {
              "type": [
                "string",
                "null"
              ]
            },
            "scheduled_start_time": {
              "type": "string",
              "format": "date-time"
            },
            "scheduled_end_time": {
              "anyOf": [
                {
                  "type": "string",
                  "format": "date-time"
                },
                {
                  "type": "null"
                }
              ]
            },
            "entity_type": {
              "type": "number",
              "const": 0
            },
            "privacy_level": {
              "type": "number",
              "const": 2
            },
            "channel_id": {
              "type": [
                "string",
                "null"
              ]
            },
            "entity_metadata": {
              "anyOf": [
                {
                  "type": "object",
                  "properties": {},
                  "additionalProperties": false
                },
                {
                  "type": "null"
                }
              ]
            }
          },
          "additionalProperties": false
        }
      ]
    }
  },
  "required": [
    "guild_id",
    "guild_scheduled_event_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guild-templates-create

Creates a template for the guild. Requires the MANAGE_GUILD permission. Returns the created guild template object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guild-templates-create-guild

Create a new guild based on a template. Returns a guild object on success. Fires a Guild Create Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "icon": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "code",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guild-templates-delete

Deletes the template. Requires the MANAGE_GUILD permission. Returns the deleted guild template object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "code": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "code"
  ],
  "additionalProperties": false
}
```

### guild-templates-get-new-member-welcome

Returns the welcome screen object for the guild.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guild-templates-list

Returns an array of guild template objects. Requires the MANAGE_GUILD permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guild-templates-sync

Syncs the template to the guild's current state. Requires the MANAGE_GUILD permission. Returns the guild template object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "code": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "code"
  ],
  "additionalProperties": false
}
```

### guild-templates-update

Modifies the template's metadata. Requires the MANAGE_GUILD permission. Returns the guild template object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "code": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "code",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

## Guilds

### guilds-add-member

Adds a user to the guild, provided you have a valid oauth2 access token for the user with the guilds.join scope. Returns a 201 Created with the guild member as the body, or 204 No Content if the user is already a member of the guild. Fires a Guild Member Add Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "nick": {
          "type": [
            "string",
            "null"
          ]
        },
        "roles": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "mute": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "deaf": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "access_token": {
          "type": "string"
        },
        "flags": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "required": [
        "access_token"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "user_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guilds-add-member-role

Adds a role to a guild member. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    },
    "role_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "user_id",
    "role_id"
  ],
  "additionalProperties": false
}
```

### guilds-bulk-ban

Ban up to 200 users from a guild, and optionally delete previous messages sent by the banned users. Requires both the BAN_MEMBERS and MANAGE_GUILD permissions. Returns a 200 response on success, including the fields banned_users with the IDs of the banned users and failed_users with IDs that could not be banned or were already banned.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "user_ids": {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        "delete_message_seconds": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "required": [
        "user_ids"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guilds-create

Create a new guild. Returns a guild object on success. Fires a Guild Create Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "description": {
      "type": [
        "string",
        "null"
      ]
    },
    "name": {
      "type": "string"
    },
    "region": {
      "type": [
        "string",
        "null"
      ]
    },
    "icon": {
      "type": [
        "string",
        "null"
      ]
    },
    "verification_level": {
      "anyOf": [
        {
          "type": "number",
          "const": 0
        },
        {
          "type": "null"
        }
      ]
    },
    "default_message_notifications": {
      "anyOf": [
        {
          "type": "number",
          "const": 0
        },
        {
          "type": "null"
        }
      ]
    },
    "explicit_content_filter": {
      "anyOf": [
        {
          "type": "number",
          "const": 0
        },
        {
          "type": "null"
        }
      ]
    },
    "preferred_locale": {
      "anyOf": [
        {
          "type": "string",
          "const": "ar"
        },
        {
          "type": "null"
        }
      ]
    },
    "afk_timeout": {
      "anyOf": [
        {
          "type": "number",
          "const": 60
        },
        {
          "type": "null"
        }
      ]
    },
    "roles": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "integer"
              },
              "name": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "permissions": {
                "anyOf": [
                  {
                    "type": "integer"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "color": {
                "anyOf": [
                  {
                    "type": "integer"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "hoist": {
                "type": [
                  "boolean",
                  "null"
                ]
              },
              "mentionable": {
                "type": [
                  "boolean",
                  "null"
                ]
              },
              "unicode_emoji": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            "required": [
              "id"
            ],
            "additionalProperties": false
          }
        },
        {
          "type": "null"
        }
      ]
    },
    "channels": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "type": "number",
                "enum": [
                  0,
                  1,
                  2,
                  3,
                  4,
                  5,
                  7,
                  10,
                  11,
                  12,
                  13,
                  14,
                  15
                ]
              },
              "name": {
                "type": "string"
              },
              "position": {
                "anyOf": [
                  {
                    "type": "integer"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "topic": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "bitrate": {
                "anyOf": [
                  {
                    "type": "integer"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "user_limit": {
                "anyOf": [
                  {
                    "type": "integer"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "nsfw": {
                "type": [
                  "boolean",
                  "null"
                ]
              },
              "rate_limit_per_user": {
                "anyOf": [
                  {
                    "type": "integer"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "parent_id": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "permission_overwrites": {
                "anyOf": [
                  {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": "string"
                        },
                        "type": {
                          "anyOf": [
                            {
                              "type": "number",
                              "const": 0
                            },
                            {
                              "type": "null"
                            }
                          ]
                        },
                        "allow": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "null"
                            }
                          ]
                        },
                        "deny": {
                          "anyOf": [
                            {
                              "type": "integer"
                            },
                            {
                              "type": "null"
                            }
                          ]
                        }
                      },
                      "required": [
                        "id"
                      ],
                      "additionalProperties": false
                    }
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "rtc_region": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "video_quality_mode": {
                "anyOf": [
                  {
                    "type": "number",
                    "const": 1
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "default_auto_archive_duration": {
                "anyOf": [
                  {
                    "type": "number",
                    "const": 60
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "default_reaction_emoji": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "emoji_id": {
                        "type": [
                          "string",
                          "null"
                        ]
                      },
                      "emoji_name": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    "additionalProperties": false
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "default_thread_rate_limit_per_user": {
                "anyOf": [
                  {
                    "type": "integer"
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "default_sort_order": {
                "anyOf": [
                  {
                    "type": "number",
                    "const": 0
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "default_forum_layout": {
                "anyOf": [
                  {
                    "type": "number",
                    "const": 0
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "default_tag_setting": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "id": {
                "type": [
                  "string",
                  "null"
                ]
              },
              "available_tags": {
                "anyOf": [
                  {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "name": {
                          "type": "string"
                        },
                        "emoji_id": {
                          "type": [
                            "string",
                            "null"
                          ]
                        },
                        "emoji_name": {
                          "type": [
                            "string",
                            "null"
                          ]
                        },
                        "moderated": {
                          "type": [
                            "boolean",
                            "null"
                          ]
                        }
                      },
                      "required": [
                        "name"
                      ],
                      "additionalProperties": false
                    }
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "required": [
              "name"
            ],
            "additionalProperties": false
          }
        },
        {
          "type": "null"
        }
      ]
    },
    "afk_channel_id": {
      "type": [
        "string",
        "null"
      ]
    },
    "system_channel_id": {
      "type": [
        "string",
        "null"
      ]
    },
    "system_channel_flags": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "required": [
    "name"
  ],
  "additionalProperties": false
}
```

### guilds-create-ban

Create a guild ban, and optionally delete previous messages sent by the banned user. Requires the BAN_MEMBERS permission. Returns a 204 empty response on success. Fires a Guild Ban Add Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "delete_message_seconds": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "delete_message_days": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "user_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guilds-create-channel

Create a new channel object for the guild. Requires the MANAGE_CHANNELS permission. If setting permission overwrites, only permissions your bot has in the guild can be allowed/denied. Setting MANAGE_ROLES permission in channels is only possible for guild administrators. Returns the new channel object on success. Fires a Channel Create Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "CreateGuildChannelRequest": {
      "type": "object",
      "properties": {
        "type": {
          "type": "number",
          "enum": [
            0,
            1,
            2,
            3,
            4,
            5,
            7,
            10,
            11,
            12,
            13,
            14,
            15
          ]
        },
        "name": {
          "type": "string"
        },
        "position": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "topic": {
          "type": [
            "string",
            "null"
          ]
        },
        "bitrate": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "user_limit": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "nsfw": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "rate_limit_per_user": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "parent_id": {
          "type": [
            "string",
            "null"
          ]
        },
        "permission_overwrites": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "type": {
                    "anyOf": [
                      {
                        "type": "number",
                        "const": 0
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "allow": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "deny": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  }
                },
                "required": [
                  "id"
                ],
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "rtc_region": {
          "type": [
            "string",
            "null"
          ]
        },
        "video_quality_mode": {
          "anyOf": [
            {
              "type": "number",
              "const": 1
            },
            {
              "type": "null"
            }
          ]
        },
        "default_auto_archive_duration": {
          "anyOf": [
            {
              "type": "number",
              "const": 60
            },
            {
              "type": "null"
            }
          ]
        },
        "default_reaction_emoji": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "emoji_id": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "emoji_name": {
                  "type": [
                    "string",
                    "null"
                  ]
                }
              },
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "default_thread_rate_limit_per_user": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "default_sort_order": {
          "anyOf": [
            {
              "type": "number",
              "const": 0
            },
            {
              "type": "null"
            }
          ]
        },
        "default_forum_layout": {
          "anyOf": [
            {
              "type": "number",
              "const": 0
            },
            {
              "type": "null"
            }
          ]
        },
        "default_tag_setting": {
          "type": [
            "string",
            "null"
          ]
        },
        "available_tags": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "name": {
                        "type": "string"
                      },
                      "emoji_id": {
                        "type": [
                          "string",
                          "null"
                        ]
                      },
                      "emoji_name": {
                        "type": [
                          "string",
                          "null"
                        ]
                      },
                      "moderated": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      }
                    },
                    "required": [
                      "name"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "CreateGuildChannelRequest"
  ],
  "additionalProperties": false
}
```

### guilds-create-role

Create a new role for the guild. Requires the MANAGE_ROLES permission. Returns the new role object on success. Fires a Guild Role Create Gateway event. All JSON params are optional.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": [
            "string",
            "null"
          ]
        },
        "permissions": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "color": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "hoist": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "mentionable": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "icon": {
          "type": [
            "string",
            "null"
          ]
        },
        "unicode_emoji": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guilds-delete

Delete a guild permanently. User must be owner. Returns 204 No Content on success. Fires a Guild Delete Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-delete-integration

Delete the attached integration object for the guild. Deletes any associated webhooks and kicks the associated bot if there is one. Requires the MANAGE_GUILD permission. Returns a 204 empty response on success. Fires Guild Integrations Update and Integration Delete Gateway events.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "integration_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "integration_id"
  ],
  "additionalProperties": false
}
```

### guilds-delete-role

Delete a guild role. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Role Delete Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "role_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "role_id"
  ],
  "additionalProperties": false
}
```

### guilds-get

Returns the guild object for the given id. If with_counts is set to true, this endpoint will also return approximate_member_count and approximate_presence_count for the guild.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "with_counts": {
      "type": "boolean"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-get-ban

Returns a ban object for the given user or a 404 not found if the ban cannot be found. Requires the BAN_MEMBERS permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "user_id"
  ],
  "additionalProperties": false
}
```

### guilds-get-member

Returns a guild member object for the specified user.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "user_id"
  ],
  "additionalProperties": false
}
```

### guilds-get-onboarding

Returns the Onboarding object for the guild.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-get-preview

Returns the guild preview object for the given id. If the user is not in the guild, then the guild must be discoverable.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-get-role

Returns a role object for the specified role.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "role_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "role_id"
  ],
  "additionalProperties": false
}
```

### guilds-get-vanity-url

Returns a partial invite object for guilds with that feature enabled. Requires the MANAGE_GUILD permission. code will be null if a vanity url for the guild is not set.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-get-welcome-screen

Returns the Welcome Screen object for the guild. If the welcome screen is not enabled, the MANAGE_GUILD permission is required.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-get-widget-settings

Returns a guild widget settings object. Requires the MANAGE_GUILD permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-list-active-threads

Returns all active threads in the guild, including public and private threads. Threads are ordered by their id, in descending order.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-list-bans

Returns a list of ban objects for the users banned from this guild. Requires the BAN_MEMBERS permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "limit": {
      "type": "integer"
    },
    "before": {
      "type": "string"
    },
    "after": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-list-channels

Returns a list of guild channel objects for a specific guild. Does not include threads.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-list-integrations

Returns a list of integration objects for the guild. Requires the MANAGE_GUILD permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-list-invites

Returns a list of invite objects (with invite metadata) for the guild. Requires the MANAGE_GUILD permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-list-members

Returns a list of guild member objects that are members of the guild.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "limit": {
      "type": "integer"
    },
    "after": {
      "type": "integer"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-list-roles

Returns a list of role objects for the guild.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-list-voice-regions

Returns a list of voice region objects for the guild. Unlike the similar /voice route, this returns VIP servers when the guild is VIP-enabled.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-preview-prune

Returns an object with one pruned key indicating the number of members that would be removed in a prune operation. Requires the MANAGE_GUILD and KICK_MEMBERS permissions.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "days": {
      "type": "integer"
    },
    "include_roles": {
      "anyOf": [
        {
          "type": "string"
        },
        {
          "type": "array",
          "items": {
            "type": [
              "string",
              "null"
            ]
          }
        }
      ]
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### guilds-prune

Begin a prune operation. Requires the MANAGE_GUILD and KICK_MEMBERS permissions. Returns an object with one pruned key indicating the number of members that were removed in the prune operation. Fires multiple Guild Member Remove Gateway events.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "days": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "compute_prune_count": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "include_roles": {
          "anyOf": [
            {
              "anyOf": [
                {
                  "type": "string"
                },
                {
                  "type": "array",
                  "items": {
                    "type": [
                      "string",
                      "null"
                    ]
                  }
                }
              ]
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guilds-remove-ban

Remove the ban for a user. Requires the BAN_MEMBERS permissions. Returns a 204 empty response on success. Fires a Guild Ban Remove Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "user_id"
  ],
  "additionalProperties": false
}
```

### guilds-remove-member

Remove a member from a guild. Requires KICK_MEMBERS permission. Returns a 204 empty response on success. Fires a Guild Member Remove Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "user_id"
  ],
  "additionalProperties": false
}
```

### guilds-remove-member-role

Removes a role from a guild member. Requires the MANAGE_ROLES permission. Returns a 204 empty response on success. Fires a Guild Member Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    },
    "role_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "user_id",
    "role_id"
  ],
  "additionalProperties": false
}
```

### guilds-search-members

Returns a list of guild member objects whose username or nickname starts with a provided string.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "limit": {
      "type": "integer"
    },
    "query": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "limit",
    "query"
  ],
  "additionalProperties": false
}
```

### guilds-set-mfa-level

Modify a guild's MFA level. Requires guild ownership. Returns the updated level on success. Fires a Guild Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "level": {
          "type": "number",
          "const": 0
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guilds-update

Modify a guild's settings. Requires the MANAGE_GUILD permission. Returns the updated guild object on success. Fires a Guild Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "GuildPatchRequestPartial": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "description": {
          "type": [
            "string",
            "null"
          ]
        },
        "region": {
          "type": [
            "string",
            "null"
          ]
        },
        "icon": {
          "type": [
            "string",
            "null"
          ]
        },
        "verification_level": {
          "anyOf": [
            {
              "type": "number",
              "const": 0
            },
            {
              "type": "null"
            }
          ]
        },
        "default_message_notifications": {
          "anyOf": [
            {
              "type": "number",
              "const": 0
            },
            {
              "type": "null"
            }
          ]
        },
        "explicit_content_filter": {
          "anyOf": [
            {
              "type": "number",
              "const": 0
            },
            {
              "type": "null"
            }
          ]
        },
        "preferred_locale": {
          "anyOf": [
            {
              "type": "string",
              "const": "ar"
            },
            {
              "type": "null"
            }
          ]
        },
        "afk_timeout": {
          "anyOf": [
            {
              "type": "number",
              "const": 60
            },
            {
              "type": "null"
            }
          ]
        },
        "afk_channel_id": {
          "type": [
            "string",
            "null"
          ]
        },
        "system_channel_id": {
          "type": [
            "string",
            "null"
          ]
        },
        "owner_id": {
          "type": "string"
        },
        "splash": {
          "type": [
            "string",
            "null"
          ]
        },
        "banner": {
          "type": [
            "string",
            "null"
          ]
        },
        "system_channel_flags": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "features": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "discovery_splash": {
          "type": [
            "string",
            "null"
          ]
        },
        "home_header": {
          "type": [
            "string",
            "null"
          ]
        },
        "rules_channel_id": {
          "type": [
            "string",
            "null"
          ]
        },
        "safety_alerts_channel_id": {
          "type": [
            "string",
            "null"
          ]
        },
        "public_updates_channel_id": {
          "type": [
            "string",
            "null"
          ]
        },
        "premium_progress_bar_enabled": {
          "type": [
            "boolean",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "GuildPatchRequestPartial"
  ],
  "additionalProperties": false
}
```

### guilds-update-channel-positions

Modify the positions of a set of channel objects for the guild. Requires MANAGE_CHANNELS permission. Returns a 204 empty response on success. Fires multiple Channel Update Gateway events.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": "string"
          },
          "position": {
            "anyOf": [
              {
                "type": "integer"
              },
              {
                "type": "null"
              }
            ]
          },
          "parent_id": {
            "type": [
              "string",
              "null"
            ]
          },
          "lock_permissions": {
            "type": [
              "boolean",
              "null"
            ]
          }
        },
        "additionalProperties": false
      }
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guilds-update-current-member

Modifies the current member in a guild. Returns a 200 with the updated member object on success. Fires a Guild Member Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "nick": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guilds-update-member

Modify attributes of a guild member. Returns a 200 OK with the guild member as the body. Fires a Guild Member Update Gateway event. If the channel_id is set to null, this will force the target user to be disconnected from voice.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "nick": {
          "type": [
            "string",
            "null"
          ]
        },
        "roles": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": [
                  "string",
                  "null"
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "mute": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "deaf": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "channel_id": {
          "type": [
            "string",
            "null"
          ]
        },
        "communication_disabled_until": {
          "anyOf": [
            {
              "type": "string",
              "format": "date-time"
            },
            {
              "type": "null"
            }
          ]
        },
        "flags": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "user_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guilds-update-onboarding

Modifies the onboarding configuration of the guild. Returns a 200 with the Onboarding object for the guild. Requires the MANAGE_GUILD and MANAGE_ROLES permissions.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "UpdateGuildOnboardingRequest": {
      "type": "object",
      "properties": {
        "prompts": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "title": {
                    "type": "string"
                  },
                  "options": {
                    "type": "array",
                    "items": {
                      "type": "object",
                      "properties": {
                        "id": {
                          "type": [
                            "string",
                            "null"
                          ]
                        },
                        "title": {
                          "type": "string"
                        },
                        "description": {
                          "type": [
                            "string",
                            "null"
                          ]
                        },
                        "emoji_id": {
                          "type": [
                            "string",
                            "null"
                          ]
                        },
                        "emoji_name": {
                          "type": [
                            "string",
                            "null"
                          ]
                        },
                        "emoji_animated": {
                          "type": [
                            "boolean",
                            "null"
                          ]
                        },
                        "role_ids": {
                          "anyOf": [
                            {
                              "type": "array",
                              "items": {
                                "type": "string"
                              }
                            },
                            {
                              "type": "null"
                            }
                          ]
                        },
                        "channel_ids": {
                          "anyOf": [
                            {
                              "type": "array",
                              "items": {
                                "type": "string"
                              }
                            },
                            {
                              "type": "null"
                            }
                          ]
                        }
                      },
                      "required": [
                        "title"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "single_select": {
                    "type": [
                      "boolean",
                      "null"
                    ]
                  },
                  "required": {
                    "type": [
                      "boolean",
                      "null"
                    ]
                  },
                  "in_onboarding": {
                    "type": [
                      "boolean",
                      "null"
                    ]
                  },
                  "type": {
                    "anyOf": [
                      {
                        "type": "number",
                        "const": 0
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "id": {
                    "type": "string"
                  }
                },
                "required": [
                  "title",
                  "options",
                  "id"
                ],
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "enabled": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "default_channel_ids": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "mode": {
          "anyOf": [
            {
              "type": "number",
              "const": 0
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "UpdateGuildOnboardingRequest"
  ],
  "additionalProperties": false
}
```

### guilds-update-role

Modify a guild role. Requires the MANAGE_ROLES permission. Returns the updated role on success. Fires a Guild Role Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "role_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": [
            "string",
            "null"
          ]
        },
        "permissions": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "color": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "hoist": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "mentionable": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "icon": {
          "type": [
            "string",
            "null"
          ]
        },
        "unicode_emoji": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "role_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guilds-update-role-positions

Modify the positions of a set of role objects for the guild. Requires the MANAGE_ROLES permission. Returns a list of all of the guild's role objects on success. Fires multiple Guild Role Update Gateway events.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "array",
      "items": {
        "type": "object",
        "properties": {
          "id": {
            "type": [
              "string",
              "null"
            ]
          },
          "position": {
            "anyOf": [
              {
                "type": "integer"
              },
              {
                "type": "null"
              }
            ]
          }
        },
        "additionalProperties": false
      }
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### guilds-update-welcome-screen

Modify the guild's Welcome Screen. Requires the MANAGE_GUILD permission. Returns the updated Welcome Screen object. May fire a Guild Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "WelcomeScreenPatchRequestPartial": {
      "type": "object",
      "properties": {
        "description": {
          "type": [
            "string",
            "null"
          ]
        },
        "welcome_channels": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "channel_id": {
                    "type": "string"
                  },
                  "description": {
                    "type": "string"
                  },
                  "emoji_id": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "emoji_name": {
                    "type": [
                      "string",
                      "null"
                    ]
                  }
                },
                "required": [
                  "channel_id",
                  "description"
                ],
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "enabled": {
          "type": [
            "boolean",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "WelcomeScreenPatchRequestPartial"
  ],
  "additionalProperties": false
}
```

### guilds-update-widget-settings

Modify a guild widget settings object for the guild. All attributes may be passed in with JSON and modified. Requires the MANAGE_GUILD permission. Returns the updated guild widget settings object. Fires a Guild Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "channel_id": {
          "type": [
            "string",
            "null"
          ]
        },
        "enabled": {
          "type": [
            "boolean",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

## Invites

### invites-delete

Delete an invite. Requires the MANAGE_CHANNELS permission on the channel this invite belongs to, or MANAGE_GUILD to remove any invite across the guild. Returns an invite object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "code": {
      "type": "string"
    }
  },
  "required": [
    "code"
  ],
  "additionalProperties": false
}
```

## Lobbies

### lobbies-add-member

Adds a user to a lobby.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "lobby_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "metadata": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "flags": {
          "anyOf": [
            {
              "type": "number",
              "enum": [
                1
              ]
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "lobby_id",
    "user_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### lobbies-create

Creates a new lobby. Returns a lobby object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "idle_timeout_seconds": {
      "anyOf": [
        {
          "type": "integer"
        },
        {
          "type": "null"
        }
      ]
    },
    "members": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "object",
            "properties": {
              "id": {
                "type": "string"
              },
              "metadata": {
                "anyOf": [
                  {
                    "type": "object",
                    "additionalProperties": {
                      "type": "string"
                    }
                  },
                  {
                    "type": "null"
                  }
                ]
              },
              "flags": {
                "anyOf": [
                  {
                    "type": "number",
                    "enum": [
                      1
                    ]
                  },
                  {
                    "type": "null"
                  }
                ]
              }
            },
            "required": [
              "id"
            ],
            "additionalProperties": false
          }
        },
        {
          "type": "null"
        }
      ]
    },
    "metadata": {
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": {
            "type": "string"
          }
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "additionalProperties": false
}
```

### lobbies-get

Returns the lobby object for the given id.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "lobby_id": {
      "type": "string"
    }
  },
  "required": [
    "lobby_id"
  ],
  "additionalProperties": false
}
```

### lobbies-remove-member

Removes a user from a lobby.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "lobby_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    }
  },
  "required": [
    "lobby_id",
    "user_id"
  ],
  "additionalProperties": false
}
```

### lobbies-update

Updates a lobby. Returns a lobby object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "lobby_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "idle_timeout_seconds": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "metadata": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "members": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "metadata": {
                    "anyOf": [
                      {
                        "type": "object",
                        "additionalProperties": {
                          "type": "string"
                        }
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "flags": {
                    "anyOf": [
                      {
                        "type": "number",
                        "enum": [
                          1
                        ]
                      },
                      {
                        "type": "null"
                      }
                    ]
                  }
                },
                "required": [
                  "id"
                ],
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "lobby_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

## Messages

### messages-bulk-delete

Delete multiple messages in a single request. This endpoint can only be used on guild channels and requires the MANAGE_MESSAGES permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "messages": {
          "type": "array",
          "items": {
            "type": "string"
          }
        }
      },
      "required": [
        "messages"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### messages-create-form

Post a message to a guild text or DM channel. If operating on a guild channel, this endpoint requires the SEND_MESSAGES permission to be present on the current user.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "MessageCreateRequest": {
      "type": "object",
      "properties": {
        "content": {
          "type": [
            "string",
            "null"
          ]
        },
        "embeds": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "url": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "title": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "color": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "timestamp": {
                    "anyOf": [
                      {
                        "type": "string",
                        "format": "date-time"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "description": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "author": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "icon_url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "image": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "thumbnail": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "footer": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "text": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "icon_url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "fields": {
                    "anyOf": [
                      {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "value": {
                              "type": "string"
                            },
                            "inline": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            }
                          },
                          "required": [
                            "name",
                            "value"
                          ],
                          "additionalProperties": false
                        }
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "provider": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "video": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "allowed_mentions": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "parse": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "users": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "roles": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "replied_user": {
                  "type": [
                    "boolean",
                    "null"
                  ]
                }
              },
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "sticker_ids": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "components": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "anyOf": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "const": "user"
                                              },
                                              "id": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "id"
                                            ],
                                            "additionalProperties": false
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "const": "user"
                                              },
                                              "id": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "id"
                                            ],
                                            "additionalProperties": false
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/0"
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "options": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "label": {
                                        "type": "string"
                                      },
                                      "value": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": [
                                          "string",
                                          "null"
                                        ]
                                      },
                                      "default": {
                                        "type": [
                                          "boolean",
                                          "null"
                                        ]
                                      },
                                      "emoji": {
                                        "anyOf": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "id": {
                                                "type": [
                                                  "string",
                                                  "null"
                                                ]
                                              },
                                              "name": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "name"
                                            ],
                                            "additionalProperties": false
                                          },
                                          {
                                            "type": "null"
                                          }
                                        ]
                                      }
                                    },
                                    "required": [
                                      "label",
                                      "value"
                                    ],
                                    "additionalProperties": false
                                  }
                                }
                              },
                              "required": [
                                "custom_id",
                                "options"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/1"
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "style": {
                                  "type": "number",
                                  "const": 1
                                },
                                "label": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "url": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "sku_id": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "emoji": {
                                  "anyOf": [
                                    {
                                      "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/2/properties/options/items/properties/emoji/anyOf/0"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "const": "user"
                                          },
                                          "id": {
                                            "type": "string"
                                          }
                                        },
                                        "required": [
                                          "id"
                                        ],
                                        "additionalProperties": false
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "channel_types": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "enum": [
                                          0,
                                          1,
                                          2,
                                          3,
                                          4,
                                          5,
                                          7,
                                          10,
                                          11,
                                          12,
                                          13,
                                          14,
                                          15
                                        ]
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "components"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "items": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "description": {
                              "type": [
                                "string",
                                "null"
                              ]
                            },
                            "spoiler": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            },
                            "media": {
                              "type": "object",
                              "properties": {
                                "url": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "url"
                              ],
                              "additionalProperties": false
                            }
                          },
                          "required": [
                            "media"
                          ],
                          "additionalProperties": false
                        }
                      }
                    },
                    "required": [
                      "items"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "content": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "content"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "spoiler": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      },
                      "file": {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "url"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "required": [
                      "file"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/2"
                        }
                      },
                      "accessory": {
                        "anyOf": [
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "number",
                                "const": 1
                              },
                              "description": {
                                "type": [
                                  "string",
                                  "null"
                                ]
                              },
                              "spoiler": {
                                "type": [
                                  "boolean",
                                  "null"
                                ]
                              },
                              "media": {
                                "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/1/properties/items/items/properties/media"
                              }
                            },
                            "required": [
                              "media"
                            ],
                            "additionalProperties": false
                          },
                          {
                            "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/4"
                          }
                        ]
                      }
                    },
                    "required": [
                      "components",
                      "accessory"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "spacing": {
                        "anyOf": [
                          {
                            "type": "number",
                            "const": 1
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "divider": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      }
                    },
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "accent_color": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/0"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/1"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/2"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/3"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/4"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/5"
                            }
                          ]
                        }
                      },
                      "spoiler": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      }
                    },
                    "required": [
                      "components"
                    ],
                    "additionalProperties": false
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "flags": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "attachments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "filename": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "description": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "duration_secs": {
                    "type": [
                      "number",
                      "null"
                    ]
                  },
                  "waveform": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "title": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "is_remix": {
                    "type": [
                      "boolean",
                      "null"
                    ]
                  }
                },
                "required": [
                  "id"
                ],
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "poll": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "question": {
                  "type": "object",
                  "properties": {
                    "text": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "emoji": {
                      "anyOf": [
                        {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": [
                                "string",
                                "null"
                              ]
                            },
                            "name": {
                              "type": [
                                "string",
                                "null"
                              ]
                            },
                            "animated": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            }
                          },
                          "additionalProperties": false
                        },
                        {
                          "type": "null"
                        }
                      ]
                    }
                  },
                  "additionalProperties": false
                },
                "answers": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "poll_media": {
                        "type": "object",
                        "properties": {
                          "text": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "emoji": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "name": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "animated": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ]
                                  }
                                },
                                "additionalProperties": false
                              },
                              {
                                "type": "null"
                              }
                            ]
                          }
                        },
                        "additionalProperties": false
                      }
                    },
                    "required": [
                      "poll_media"
                    ],
                    "additionalProperties": false
                  }
                },
                "allow_multiselect": {
                  "type": [
                    "boolean",
                    "null"
                  ]
                },
                "layout_type": {
                  "anyOf": [
                    {
                      "type": "integer"
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "duration": {
                  "anyOf": [
                    {
                      "type": "integer"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "required": [
                "question",
                "answers"
              ],
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "confetti_potion": {
          "anyOf": [
            {
              "type": "object",
              "properties": {},
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "message_reference": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "guild_id": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "channel_id": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "message_id": {
                  "type": "string"
                },
                "fail_if_not_exists": {
                  "type": [
                    "boolean",
                    "null"
                  ]
                },
                "type": {
                  "anyOf": [
                    {
                      "type": "number",
                      "const": 0
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "required": [
                "message_id"
              ],
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "nonce": {
          "anyOf": [
            {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "string"
                }
              ]
            },
            {
              "type": "null"
            }
          ]
        },
        "enforce_nonce": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "tts": {
          "type": [
            "boolean",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "MessageCreateRequest"
  ],
  "additionalProperties": false
}
```

### messages-create-json

Post a message to a guild text or DM channel. If operating on a guild channel, this endpoint requires the SEND_MESSAGES permission to be present on the current user.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "MessageCreateRequest": {
      "type": "object",
      "properties": {
        "content": {
          "type": [
            "string",
            "null"
          ]
        },
        "embeds": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "url": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "title": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "color": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "timestamp": {
                    "anyOf": [
                      {
                        "type": "string",
                        "format": "date-time"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "description": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "author": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "icon_url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "image": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "thumbnail": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "footer": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "text": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "icon_url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "fields": {
                    "anyOf": [
                      {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "value": {
                              "type": "string"
                            },
                            "inline": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            }
                          },
                          "required": [
                            "name",
                            "value"
                          ],
                          "additionalProperties": false
                        }
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "provider": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "video": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "allowed_mentions": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "parse": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "users": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "roles": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "replied_user": {
                  "type": [
                    "boolean",
                    "null"
                  ]
                }
              },
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "sticker_ids": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "components": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "anyOf": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "const": "user"
                                              },
                                              "id": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "id"
                                            ],
                                            "additionalProperties": false
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "const": "user"
                                              },
                                              "id": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "id"
                                            ],
                                            "additionalProperties": false
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/0"
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "options": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "label": {
                                        "type": "string"
                                      },
                                      "value": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": [
                                          "string",
                                          "null"
                                        ]
                                      },
                                      "default": {
                                        "type": [
                                          "boolean",
                                          "null"
                                        ]
                                      },
                                      "emoji": {
                                        "anyOf": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "id": {
                                                "type": [
                                                  "string",
                                                  "null"
                                                ]
                                              },
                                              "name": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "name"
                                            ],
                                            "additionalProperties": false
                                          },
                                          {
                                            "type": "null"
                                          }
                                        ]
                                      }
                                    },
                                    "required": [
                                      "label",
                                      "value"
                                    ],
                                    "additionalProperties": false
                                  }
                                }
                              },
                              "required": [
                                "custom_id",
                                "options"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/1"
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "style": {
                                  "type": "number",
                                  "const": 1
                                },
                                "label": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "url": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "sku_id": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "emoji": {
                                  "anyOf": [
                                    {
                                      "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/2/properties/options/items/properties/emoji/anyOf/0"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "const": "user"
                                          },
                                          "id": {
                                            "type": "string"
                                          }
                                        },
                                        "required": [
                                          "id"
                                        ],
                                        "additionalProperties": false
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "channel_types": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "enum": [
                                          0,
                                          1,
                                          2,
                                          3,
                                          4,
                                          5,
                                          7,
                                          10,
                                          11,
                                          12,
                                          13,
                                          14,
                                          15
                                        ]
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "components"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "items": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "description": {
                              "type": [
                                "string",
                                "null"
                              ]
                            },
                            "spoiler": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            },
                            "media": {
                              "type": "object",
                              "properties": {
                                "url": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "url"
                              ],
                              "additionalProperties": false
                            }
                          },
                          "required": [
                            "media"
                          ],
                          "additionalProperties": false
                        }
                      }
                    },
                    "required": [
                      "items"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "content": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "content"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "spoiler": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      },
                      "file": {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "url"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "required": [
                      "file"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/2"
                        }
                      },
                      "accessory": {
                        "anyOf": [
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "number",
                                "const": 1
                              },
                              "description": {
                                "type": [
                                  "string",
                                  "null"
                                ]
                              },
                              "spoiler": {
                                "type": [
                                  "boolean",
                                  "null"
                                ]
                              },
                              "media": {
                                "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/1/properties/items/items/properties/media"
                              }
                            },
                            "required": [
                              "media"
                            ],
                            "additionalProperties": false
                          },
                          {
                            "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/4"
                          }
                        ]
                      }
                    },
                    "required": [
                      "components",
                      "accessory"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "spacing": {
                        "anyOf": [
                          {
                            "type": "number",
                            "const": 1
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "divider": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      }
                    },
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "accent_color": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/0"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/1"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/2"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/3"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/4"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageCreateRequest/properties/components/anyOf/0/items/anyOf/5"
                            }
                          ]
                        }
                      },
                      "spoiler": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      }
                    },
                    "required": [
                      "components"
                    ],
                    "additionalProperties": false
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "flags": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "attachments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "filename": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "description": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "duration_secs": {
                    "type": [
                      "number",
                      "null"
                    ]
                  },
                  "waveform": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "title": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "is_remix": {
                    "type": [
                      "boolean",
                      "null"
                    ]
                  }
                },
                "required": [
                  "id"
                ],
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "poll": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "question": {
                  "type": "object",
                  "properties": {
                    "text": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "emoji": {
                      "anyOf": [
                        {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": [
                                "string",
                                "null"
                              ]
                            },
                            "name": {
                              "type": [
                                "string",
                                "null"
                              ]
                            },
                            "animated": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            }
                          },
                          "additionalProperties": false
                        },
                        {
                          "type": "null"
                        }
                      ]
                    }
                  },
                  "additionalProperties": false
                },
                "answers": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "poll_media": {
                        "type": "object",
                        "properties": {
                          "text": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "emoji": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "name": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "animated": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ]
                                  }
                                },
                                "additionalProperties": false
                              },
                              {
                                "type": "null"
                              }
                            ]
                          }
                        },
                        "additionalProperties": false
                      }
                    },
                    "required": [
                      "poll_media"
                    ],
                    "additionalProperties": false
                  }
                },
                "allow_multiselect": {
                  "type": [
                    "boolean",
                    "null"
                  ]
                },
                "layout_type": {
                  "anyOf": [
                    {
                      "type": "integer"
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "duration": {
                  "anyOf": [
                    {
                      "type": "integer"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "required": [
                "question",
                "answers"
              ],
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "confetti_potion": {
          "anyOf": [
            {
              "type": "object",
              "properties": {},
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "message_reference": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "guild_id": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "channel_id": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "message_id": {
                  "type": "string"
                },
                "fail_if_not_exists": {
                  "type": [
                    "boolean",
                    "null"
                  ]
                },
                "type": {
                  "anyOf": [
                    {
                      "type": "number",
                      "const": 0
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "required": [
                "message_id"
              ],
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "nonce": {
          "anyOf": [
            {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "string"
                }
              ]
            },
            {
              "type": "null"
            }
          ]
        },
        "enforce_nonce": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "tts": {
          "type": [
            "boolean",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "MessageCreateRequest"
  ],
  "additionalProperties": false
}
```

### messages-create-multipart

Post a message to a guild text or DM channel. If operating on a guild channel, this endpoint requires the SEND_MESSAGES permission to be present on the current user.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "content": {
          "type": [
            "string",
            "null"
          ]
        },
        "embeds": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "url": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "title": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "color": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "timestamp": {
                    "anyOf": [
                      {
                        "type": "string",
                        "format": "date-time"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "description": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "author": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "icon_url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "image": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "thumbnail": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "footer": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "text": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "icon_url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "fields": {
                    "anyOf": [
                      {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "value": {
                              "type": "string"
                            },
                            "inline": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            }
                          },
                          "required": [
                            "name",
                            "value"
                          ],
                          "additionalProperties": false
                        }
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "provider": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "video": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "allowed_mentions": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "parse": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "users": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "roles": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "replied_user": {
                  "type": [
                    "boolean",
                    "null"
                  ]
                }
              },
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "sticker_ids": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "components": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "anyOf": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "const": "user"
                                              },
                                              "id": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "id"
                                            ],
                                            "additionalProperties": false
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "const": "user"
                                              },
                                              "id": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "id"
                                            ],
                                            "additionalProperties": false
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/0"
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "options": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "label": {
                                        "type": "string"
                                      },
                                      "value": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": [
                                          "string",
                                          "null"
                                        ]
                                      },
                                      "default": {
                                        "type": [
                                          "boolean",
                                          "null"
                                        ]
                                      },
                                      "emoji": {
                                        "anyOf": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "id": {
                                                "type": [
                                                  "string",
                                                  "null"
                                                ]
                                              },
                                              "name": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "name"
                                            ],
                                            "additionalProperties": false
                                          },
                                          {
                                            "type": "null"
                                          }
                                        ]
                                      }
                                    },
                                    "required": [
                                      "label",
                                      "value"
                                    ],
                                    "additionalProperties": false
                                  }
                                }
                              },
                              "required": [
                                "custom_id",
                                "options"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/1"
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "style": {
                                  "type": "number",
                                  "const": 1
                                },
                                "label": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "url": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "sku_id": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "emoji": {
                                  "anyOf": [
                                    {
                                      "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/2/properties/options/items/properties/emoji/anyOf/0"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "const": "user"
                                          },
                                          "id": {
                                            "type": "string"
                                          }
                                        },
                                        "required": [
                                          "id"
                                        ],
                                        "additionalProperties": false
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "channel_types": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "enum": [
                                          0,
                                          1,
                                          2,
                                          3,
                                          4,
                                          5,
                                          7,
                                          10,
                                          11,
                                          12,
                                          13,
                                          14,
                                          15
                                        ]
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "components"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "items": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "description": {
                              "type": [
                                "string",
                                "null"
                              ]
                            },
                            "spoiler": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            },
                            "media": {
                              "type": "object",
                              "properties": {
                                "url": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "url"
                              ],
                              "additionalProperties": false
                            }
                          },
                          "required": [
                            "media"
                          ],
                          "additionalProperties": false
                        }
                      }
                    },
                    "required": [
                      "items"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "content": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "content"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "spoiler": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      },
                      "file": {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "url"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "required": [
                      "file"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/2"
                        }
                      },
                      "accessory": {
                        "anyOf": [
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "number",
                                "const": 1
                              },
                              "description": {
                                "type": [
                                  "string",
                                  "null"
                                ]
                              },
                              "spoiler": {
                                "type": [
                                  "boolean",
                                  "null"
                                ]
                              },
                              "media": {
                                "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/1/properties/items/items/properties/media"
                              }
                            },
                            "required": [
                              "media"
                            ],
                            "additionalProperties": false
                          },
                          {
                            "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/4"
                          }
                        ]
                      }
                    },
                    "required": [
                      "components",
                      "accessory"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "spacing": {
                        "anyOf": [
                          {
                            "type": "number",
                            "const": 1
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "divider": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      }
                    },
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "accent_color": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/0"
                            },
                            {
                              "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/1"
                            },
                            {
                              "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/2"
                            },
                            {
                              "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/3"
                            },
                            {
                              "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/4"
                            },
                            {
                              "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/5"
                            }
                          ]
                        }
                      },
                      "spoiler": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      }
                    },
                    "required": [
                      "components"
                    ],
                    "additionalProperties": false
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "flags": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "attachments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "filename": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "description": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "duration_secs": {
                    "type": [
                      "number",
                      "null"
                    ]
                  },
                  "waveform": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "title": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "is_remix": {
                    "type": [
                      "boolean",
                      "null"
                    ]
                  }
                },
                "required": [
                  "id"
                ],
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "poll": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "question": {
                  "type": "object",
                  "properties": {
                    "text": {
                      "type": [
                        "string",
                        "null"
                      ]
                    },
                    "emoji": {
                      "anyOf": [
                        {
                          "type": "object",
                          "properties": {
                            "id": {
                              "type": [
                                "string",
                                "null"
                              ]
                            },
                            "name": {
                              "type": [
                                "string",
                                "null"
                              ]
                            },
                            "animated": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            }
                          },
                          "additionalProperties": false
                        },
                        {
                          "type": "null"
                        }
                      ]
                    }
                  },
                  "additionalProperties": false
                },
                "answers": {
                  "type": "array",
                  "items": {
                    "type": "object",
                    "properties": {
                      "poll_media": {
                        "type": "object",
                        "properties": {
                          "text": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "emoji": {
                            "anyOf": [
                              {
                                "type": "object",
                                "properties": {
                                  "id": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "name": {
                                    "type": [
                                      "string",
                                      "null"
                                    ]
                                  },
                                  "animated": {
                                    "type": [
                                      "boolean",
                                      "null"
                                    ]
                                  }
                                },
                                "additionalProperties": false
                              },
                              {
                                "type": "null"
                              }
                            ]
                          }
                        },
                        "additionalProperties": false
                      }
                    },
                    "required": [
                      "poll_media"
                    ],
                    "additionalProperties": false
                  }
                },
                "allow_multiselect": {
                  "type": [
                    "boolean",
                    "null"
                  ]
                },
                "layout_type": {
                  "anyOf": [
                    {
                      "type": "integer"
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "duration": {
                  "anyOf": [
                    {
                      "type": "integer"
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "required": [
                "question",
                "answers"
              ],
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "confetti_potion": {
          "anyOf": [
            {
              "type": "object",
              "properties": {},
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "message_reference": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "guild_id": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "channel_id": {
                  "type": [
                    "string",
                    "null"
                  ]
                },
                "message_id": {
                  "type": "string"
                },
                "fail_if_not_exists": {
                  "type": [
                    "boolean",
                    "null"
                  ]
                },
                "type": {
                  "anyOf": [
                    {
                      "type": "number",
                      "const": 0
                    },
                    {
                      "type": "null"
                    }
                  ]
                }
              },
              "required": [
                "message_id"
              ],
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "nonce": {
          "anyOf": [
            {
              "anyOf": [
                {
                  "type": "integer"
                },
                {
                  "type": "string"
                }
              ]
            },
            {
              "type": "null"
            }
          ]
        },
        "enforce_nonce": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "tts": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "files[0]": {
          "type": "string"
        },
        "files[1]": {
          "type": "string"
        },
        "files[2]": {
          "type": "string"
        },
        "files[3]": {
          "type": "string"
        },
        "files[4]": {
          "type": "string"
        },
        "files[5]": {
          "type": "string"
        },
        "files[6]": {
          "type": "string"
        },
        "files[7]": {
          "type": "string"
        },
        "files[8]": {
          "type": "string"
        },
        "files[9]": {
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### messages-create-reaction

Create a reaction for the message. This endpoint requires the READ_MESSAGE_HISTORY permission to be present on the current user.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    },
    "emoji_name": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "message_id",
    "emoji_name"
  ],
  "additionalProperties": false
}
```

### messages-crosspost

Crosspost a message in an Announcement Channel to following channels. This endpoint requires the SEND_MESSAGES permission, if the current user sent the message, or additionally the MANAGE_MESSAGES permission, for all other messages, to be present for the current user.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "message_id"
  ],
  "additionalProperties": false
}
```

### messages-delete

Delete a message. If operating on a guild channel and trying to delete a message that was not sent by the current user, this endpoint requires the MANAGE_MESSAGES permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "message_id"
  ],
  "additionalProperties": false
}
```

### messages-delete-all-reactions

Deletes all reactions on a message. This endpoint requires the MANAGE_MESSAGES permission to be present on the current user.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "message_id"
  ],
  "additionalProperties": false
}
```

### messages-delete-all-reactions-for-emoji

Deletes all the reactions for a given emoji on a message. This endpoint requires the MANAGE_MESSAGES permission to be present on the current user.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    },
    "emoji_name": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "message_id",
    "emoji_name"
  ],
  "additionalProperties": false
}
```

### messages-delete-own-reaction

Delete a reaction the current user has made for the message. Returns a 204 empty response on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    },
    "emoji_name": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "message_id",
    "emoji_name"
  ],
  "additionalProperties": false
}
```

### messages-delete-user-reaction

Deletes another user's reaction. This endpoint requires the MANAGE_MESSAGES permission to be present on the current user.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    },
    "emoji_name": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "message_id",
    "emoji_name",
    "user_id"
  ],
  "additionalProperties": false
}
```

### messages-get

Returns a specific message in the channel. If operating on a guild channel, this endpoint requires the READ_MESSAGE_HISTORY permission to be present on the current user.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "message_id"
  ],
  "additionalProperties": false
}
```

### messages-list

Returns the messages for a channel. If operating on a guild channel, this endpoint requires the VIEW_CHANNEL permission to be present on the current user.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "around": {
      "type": "string"
    },
    "before": {
      "type": "string"
    },
    "after": {
      "type": "string"
    },
    "limit": {
      "type": "integer"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### messages-list-reactions-by-emoji

Get a list of users that reacted with a specific emoji.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    },
    "emoji_name": {
      "type": "string"
    },
    "after": {
      "type": "string"
    },
    "limit": {
      "type": "integer"
    },
    "type": {
      "type": "number",
      "const": 0
    }
  },
  "required": [
    "channel_id",
    "message_id",
    "emoji_name"
  ],
  "additionalProperties": false
}
```

### messages-update-form

Edit a previously sent message. The fields content, embeds, and flags can be edited by the original message author. Other users can only edit flags and only if they have the MANAGE_MESSAGES permission in the corresponding channel.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    },
    "MessageEditRequestPartial": {
      "type": "object",
      "properties": {
        "content": {
          "type": [
            "string",
            "null"
          ]
        },
        "embeds": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "url": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "title": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "color": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "timestamp": {
                    "anyOf": [
                      {
                        "type": "string",
                        "format": "date-time"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "description": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "author": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "icon_url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "image": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "thumbnail": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "footer": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "text": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "icon_url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "fields": {
                    "anyOf": [
                      {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "value": {
                              "type": "string"
                            },
                            "inline": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            }
                          },
                          "required": [
                            "name",
                            "value"
                          ],
                          "additionalProperties": false
                        }
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "provider": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "video": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "flags": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "allowed_mentions": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "parse": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "users": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "roles": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "replied_user": {
                  "type": [
                    "boolean",
                    "null"
                  ]
                }
              },
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "sticker_ids": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "components": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "anyOf": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "const": "user"
                                              },
                                              "id": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "id"
                                            ],
                                            "additionalProperties": false
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "const": "user"
                                              },
                                              "id": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "id"
                                            ],
                                            "additionalProperties": false
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/0"
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "options": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "label": {
                                        "type": "string"
                                      },
                                      "value": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": [
                                          "string",
                                          "null"
                                        ]
                                      },
                                      "default": {
                                        "type": [
                                          "boolean",
                                          "null"
                                        ]
                                      },
                                      "emoji": {
                                        "anyOf": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "id": {
                                                "type": [
                                                  "string",
                                                  "null"
                                                ]
                                              },
                                              "name": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "name"
                                            ],
                                            "additionalProperties": false
                                          },
                                          {
                                            "type": "null"
                                          }
                                        ]
                                      }
                                    },
                                    "required": [
                                      "label",
                                      "value"
                                    ],
                                    "additionalProperties": false
                                  }
                                }
                              },
                              "required": [
                                "custom_id",
                                "options"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/1"
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "style": {
                                  "type": "number",
                                  "const": 1
                                },
                                "label": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "url": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "sku_id": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "emoji": {
                                  "anyOf": [
                                    {
                                      "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/2/properties/options/items/properties/emoji/anyOf/0"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "const": "user"
                                          },
                                          "id": {
                                            "type": "string"
                                          }
                                        },
                                        "required": [
                                          "id"
                                        ],
                                        "additionalProperties": false
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "channel_types": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "enum": [
                                          0,
                                          1,
                                          2,
                                          3,
                                          4,
                                          5,
                                          7,
                                          10,
                                          11,
                                          12,
                                          13,
                                          14,
                                          15
                                        ]
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "components"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "items": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "description": {
                              "type": [
                                "string",
                                "null"
                              ]
                            },
                            "spoiler": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            },
                            "media": {
                              "type": "object",
                              "properties": {
                                "url": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "url"
                              ],
                              "additionalProperties": false
                            }
                          },
                          "required": [
                            "media"
                          ],
                          "additionalProperties": false
                        }
                      }
                    },
                    "required": [
                      "items"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "content": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "content"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "spoiler": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      },
                      "file": {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "url"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "required": [
                      "file"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/2"
                        }
                      },
                      "accessory": {
                        "anyOf": [
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "number",
                                "const": 1
                              },
                              "description": {
                                "type": [
                                  "string",
                                  "null"
                                ]
                              },
                              "spoiler": {
                                "type": [
                                  "boolean",
                                  "null"
                                ]
                              },
                              "media": {
                                "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/1/properties/items/items/properties/media"
                              }
                            },
                            "required": [
                              "media"
                            ],
                            "additionalProperties": false
                          },
                          {
                            "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/4"
                          }
                        ]
                      }
                    },
                    "required": [
                      "components",
                      "accessory"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "spacing": {
                        "anyOf": [
                          {
                            "type": "number",
                            "const": 1
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "divider": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      }
                    },
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "accent_color": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/0"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/1"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/2"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/3"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/4"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/5"
                            }
                          ]
                        }
                      },
                      "spoiler": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      }
                    },
                    "required": [
                      "components"
                    ],
                    "additionalProperties": false
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "attachments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "filename": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "description": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "duration_secs": {
                    "type": [
                      "number",
                      "null"
                    ]
                  },
                  "waveform": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "title": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "is_remix": {
                    "type": [
                      "boolean",
                      "null"
                    ]
                  }
                },
                "required": [
                  "id"
                ],
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "message_id",
    "MessageEditRequestPartial"
  ],
  "additionalProperties": false
}
```

### messages-update-json

Edit a previously sent message. The fields content, embeds, and flags can be edited by the original message author. Other users can only edit flags and only if they have the MANAGE_MESSAGES permission in the corresponding channel.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    },
    "MessageEditRequestPartial": {
      "type": "object",
      "properties": {
        "content": {
          "type": [
            "string",
            "null"
          ]
        },
        "embeds": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "url": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "title": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "color": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "timestamp": {
                    "anyOf": [
                      {
                        "type": "string",
                        "format": "date-time"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "description": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "author": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "icon_url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "image": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "thumbnail": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "footer": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "text": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "icon_url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "fields": {
                    "anyOf": [
                      {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "value": {
                              "type": "string"
                            },
                            "inline": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            }
                          },
                          "required": [
                            "name",
                            "value"
                          ],
                          "additionalProperties": false
                        }
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "provider": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "video": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "flags": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "allowed_mentions": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "parse": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "users": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "roles": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "replied_user": {
                  "type": [
                    "boolean",
                    "null"
                  ]
                }
              },
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "sticker_ids": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "components": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "anyOf": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "const": "user"
                                              },
                                              "id": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "id"
                                            ],
                                            "additionalProperties": false
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "const": "user"
                                              },
                                              "id": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "id"
                                            ],
                                            "additionalProperties": false
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/0"
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "options": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "label": {
                                        "type": "string"
                                      },
                                      "value": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": [
                                          "string",
                                          "null"
                                        ]
                                      },
                                      "default": {
                                        "type": [
                                          "boolean",
                                          "null"
                                        ]
                                      },
                                      "emoji": {
                                        "anyOf": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "id": {
                                                "type": [
                                                  "string",
                                                  "null"
                                                ]
                                              },
                                              "name": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "name"
                                            ],
                                            "additionalProperties": false
                                          },
                                          {
                                            "type": "null"
                                          }
                                        ]
                                      }
                                    },
                                    "required": [
                                      "label",
                                      "value"
                                    ],
                                    "additionalProperties": false
                                  }
                                }
                              },
                              "required": [
                                "custom_id",
                                "options"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/1"
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "style": {
                                  "type": "number",
                                  "const": 1
                                },
                                "label": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "url": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "sku_id": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "emoji": {
                                  "anyOf": [
                                    {
                                      "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/2/properties/options/items/properties/emoji/anyOf/0"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "const": "user"
                                          },
                                          "id": {
                                            "type": "string"
                                          }
                                        },
                                        "required": [
                                          "id"
                                        ],
                                        "additionalProperties": false
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "channel_types": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "enum": [
                                          0,
                                          1,
                                          2,
                                          3,
                                          4,
                                          5,
                                          7,
                                          10,
                                          11,
                                          12,
                                          13,
                                          14,
                                          15
                                        ]
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "components"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "items": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "description": {
                              "type": [
                                "string",
                                "null"
                              ]
                            },
                            "spoiler": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            },
                            "media": {
                              "type": "object",
                              "properties": {
                                "url": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "url"
                              ],
                              "additionalProperties": false
                            }
                          },
                          "required": [
                            "media"
                          ],
                          "additionalProperties": false
                        }
                      }
                    },
                    "required": [
                      "items"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "content": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "content"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "spoiler": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      },
                      "file": {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "url"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "required": [
                      "file"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/2"
                        }
                      },
                      "accessory": {
                        "anyOf": [
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "number",
                                "const": 1
                              },
                              "description": {
                                "type": [
                                  "string",
                                  "null"
                                ]
                              },
                              "spoiler": {
                                "type": [
                                  "boolean",
                                  "null"
                                ]
                              },
                              "media": {
                                "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/1/properties/items/items/properties/media"
                              }
                            },
                            "required": [
                              "media"
                            ],
                            "additionalProperties": false
                          },
                          {
                            "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/4"
                          }
                        ]
                      }
                    },
                    "required": [
                      "components",
                      "accessory"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "spacing": {
                        "anyOf": [
                          {
                            "type": "number",
                            "const": 1
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "divider": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      }
                    },
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "accent_color": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/0"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/1"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/2"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/3"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/4"
                            },
                            {
                              "$ref": "#/properties/request/properties/MessageEditRequestPartial/properties/components/anyOf/0/items/anyOf/5"
                            }
                          ]
                        }
                      },
                      "spoiler": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      }
                    },
                    "required": [
                      "components"
                    ],
                    "additionalProperties": false
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "attachments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "filename": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "description": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "duration_secs": {
                    "type": [
                      "number",
                      "null"
                    ]
                  },
                  "waveform": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "title": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "is_remix": {
                    "type": [
                      "boolean",
                      "null"
                    ]
                  }
                },
                "required": [
                  "id"
                ],
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "message_id",
    "MessageEditRequestPartial"
  ],
  "additionalProperties": false
}
```

### messages-update-multipart

Edit a previously sent message. The fields content, embeds, and flags can be edited by the original message author. Other users can only edit flags and only if they have the MANAGE_MESSAGES permission in the corresponding channel.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "content": {
          "type": [
            "string",
            "null"
          ]
        },
        "embeds": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "type": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "url": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "title": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "color": {
                    "anyOf": [
                      {
                        "type": "integer"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "timestamp": {
                    "anyOf": [
                      {
                        "type": "string",
                        "format": "date-time"
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "description": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "author": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "icon_url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "image": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "thumbnail": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "footer": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "text": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "icon_url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "fields": {
                    "anyOf": [
                      {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "name": {
                              "type": "string"
                            },
                            "value": {
                              "type": "string"
                            },
                            "inline": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            }
                          },
                          "required": [
                            "name",
                            "value"
                          ],
                          "additionalProperties": false
                        }
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "provider": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "name": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  },
                  "video": {
                    "anyOf": [
                      {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "width": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "height": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "placeholder": {
                            "type": [
                              "string",
                              "null"
                            ]
                          },
                          "placeholder_version": {
                            "anyOf": [
                              {
                                "type": "integer"
                              },
                              {
                                "type": "null"
                              }
                            ]
                          },
                          "is_animated": {
                            "type": [
                              "boolean",
                              "null"
                            ]
                          },
                          "description": {
                            "type": [
                              "string",
                              "null"
                            ]
                          }
                        },
                        "additionalProperties": false
                      },
                      {
                        "type": "null"
                      }
                    ]
                  }
                },
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "flags": {
          "anyOf": [
            {
              "type": "integer"
            },
            {
              "type": "null"
            }
          ]
        },
        "allowed_mentions": {
          "anyOf": [
            {
              "type": "object",
              "properties": {
                "parse": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "users": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "roles": {
                  "anyOf": [
                    {
                      "type": "array",
                      "items": {
                        "type": [
                          "string",
                          "null"
                        ]
                      }
                    },
                    {
                      "type": "null"
                    }
                  ]
                },
                "replied_user": {
                  "type": [
                    "boolean",
                    "null"
                  ]
                }
              },
              "additionalProperties": false
            },
            {
              "type": "null"
            }
          ]
        },
        "sticker_ids": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "string"
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "components": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "anyOf": [
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "anyOf": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "const": "user"
                                              },
                                              "id": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "id"
                                            ],
                                            "additionalProperties": false
                                          },
                                          {
                                            "type": "object",
                                            "properties": {
                                              "type": {
                                                "type": "string",
                                                "const": "user"
                                              },
                                              "id": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "id"
                                            ],
                                            "additionalProperties": false
                                          }
                                        ]
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/0"
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "options": {
                                  "type": "array",
                                  "items": {
                                    "type": "object",
                                    "properties": {
                                      "label": {
                                        "type": "string"
                                      },
                                      "value": {
                                        "type": "string"
                                      },
                                      "description": {
                                        "type": [
                                          "string",
                                          "null"
                                        ]
                                      },
                                      "default": {
                                        "type": [
                                          "boolean",
                                          "null"
                                        ]
                                      },
                                      "emoji": {
                                        "anyOf": [
                                          {
                                            "type": "object",
                                            "properties": {
                                              "id": {
                                                "type": [
                                                  "string",
                                                  "null"
                                                ]
                                              },
                                              "name": {
                                                "type": "string"
                                              }
                                            },
                                            "required": [
                                              "name"
                                            ],
                                            "additionalProperties": false
                                          },
                                          {
                                            "type": "null"
                                          }
                                        ]
                                      }
                                    },
                                    "required": [
                                      "label",
                                      "value"
                                    ],
                                    "additionalProperties": false
                                  }
                                }
                              },
                              "required": [
                                "custom_id",
                                "options"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/0/properties/default_values/anyOf/0/items/anyOf/1"
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "style": {
                                  "type": "number",
                                  "const": 1
                                },
                                "label": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "url": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "sku_id": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "emoji": {
                                  "anyOf": [
                                    {
                                      "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/2/properties/options/items/properties/emoji/anyOf/0"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "additionalProperties": false
                            },
                            {
                              "type": "object",
                              "properties": {
                                "type": {
                                  "type": "number",
                                  "const": 1
                                },
                                "custom_id": {
                                  "type": "string"
                                },
                                "placeholder": {
                                  "type": [
                                    "string",
                                    "null"
                                  ]
                                },
                                "min_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "max_values": {
                                  "anyOf": [
                                    {
                                      "type": "integer"
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "disabled": {
                                  "type": [
                                    "boolean",
                                    "null"
                                  ]
                                },
                                "default_values": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "type": "object",
                                        "properties": {
                                          "type": {
                                            "type": "string",
                                            "const": "user"
                                          },
                                          "id": {
                                            "type": "string"
                                          }
                                        },
                                        "required": [
                                          "id"
                                        ],
                                        "additionalProperties": false
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                },
                                "channel_types": {
                                  "anyOf": [
                                    {
                                      "type": "array",
                                      "items": {
                                        "type": "number",
                                        "enum": [
                                          0,
                                          1,
                                          2,
                                          3,
                                          4,
                                          5,
                                          7,
                                          10,
                                          11,
                                          12,
                                          13,
                                          14,
                                          15
                                        ]
                                      }
                                    },
                                    {
                                      "type": "null"
                                    }
                                  ]
                                }
                              },
                              "required": [
                                "custom_id"
                              ],
                              "additionalProperties": false
                            }
                          ]
                        }
                      }
                    },
                    "required": [
                      "components"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "items": {
                        "type": "array",
                        "items": {
                          "type": "object",
                          "properties": {
                            "description": {
                              "type": [
                                "string",
                                "null"
                              ]
                            },
                            "spoiler": {
                              "type": [
                                "boolean",
                                "null"
                              ]
                            },
                            "media": {
                              "type": "object",
                              "properties": {
                                "url": {
                                  "type": "string"
                                }
                              },
                              "required": [
                                "url"
                              ],
                              "additionalProperties": false
                            }
                          },
                          "required": [
                            "media"
                          ],
                          "additionalProperties": false
                        }
                      }
                    },
                    "required": [
                      "items"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "content": {
                        "type": "string"
                      }
                    },
                    "required": [
                      "content"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "spoiler": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      },
                      "file": {
                        "type": "object",
                        "properties": {
                          "url": {
                            "type": "string"
                          }
                        },
                        "required": [
                          "url"
                        ],
                        "additionalProperties": false
                      }
                    },
                    "required": [
                      "file"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/2"
                        }
                      },
                      "accessory": {
                        "anyOf": [
                          {
                            "type": "object",
                            "properties": {
                              "type": {
                                "type": "number",
                                "const": 1
                              },
                              "description": {
                                "type": [
                                  "string",
                                  "null"
                                ]
                              },
                              "spoiler": {
                                "type": [
                                  "boolean",
                                  "null"
                                ]
                              },
                              "media": {
                                "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/1/properties/items/items/properties/media"
                              }
                            },
                            "required": [
                              "media"
                            ],
                            "additionalProperties": false
                          },
                          {
                            "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/0/properties/components/items/anyOf/4"
                          }
                        ]
                      }
                    },
                    "required": [
                      "components",
                      "accessory"
                    ],
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "spacing": {
                        "anyOf": [
                          {
                            "type": "number",
                            "const": 1
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "divider": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      }
                    },
                    "additionalProperties": false
                  },
                  {
                    "type": "object",
                    "properties": {
                      "type": {
                        "type": "number",
                        "const": 1
                      },
                      "accent_color": {
                        "anyOf": [
                          {
                            "type": "integer"
                          },
                          {
                            "type": "null"
                          }
                        ]
                      },
                      "components": {
                        "type": "array",
                        "items": {
                          "anyOf": [
                            {
                              "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/0"
                            },
                            {
                              "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/1"
                            },
                            {
                              "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/2"
                            },
                            {
                              "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/3"
                            },
                            {
                              "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/4"
                            },
                            {
                              "$ref": "#/properties/request/properties/RequestBody/properties/components/anyOf/0/items/anyOf/5"
                            }
                          ]
                        }
                      },
                      "spoiler": {
                        "type": [
                          "boolean",
                          "null"
                        ]
                      }
                    },
                    "required": [
                      "components"
                    ],
                    "additionalProperties": false
                  }
                ]
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "attachments": {
          "anyOf": [
            {
              "type": "array",
              "items": {
                "type": "object",
                "properties": {
                  "id": {
                    "type": "string"
                  },
                  "filename": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "description": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "duration_secs": {
                    "type": [
                      "number",
                      "null"
                    ]
                  },
                  "waveform": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "title": {
                    "type": [
                      "string",
                      "null"
                    ]
                  },
                  "is_remix": {
                    "type": [
                      "boolean",
                      "null"
                    ]
                  }
                },
                "required": [
                  "id"
                ],
                "additionalProperties": false
              }
            },
            {
              "type": "null"
            }
          ]
        },
        "files[0]": {
          "type": "string"
        },
        "files[1]": {
          "type": "string"
        },
        "files[2]": {
          "type": "string"
        },
        "files[3]": {
          "type": "string"
        },
        "files[4]": {
          "type": "string"
        },
        "files[5]": {
          "type": "string"
        },
        "files[6]": {
          "type": "string"
        },
        "files[7]": {
          "type": "string"
        },
        "files[8]": {
          "type": "string"
        },
        "files[9]": {
          "type": "string"
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "message_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

## Polls

### polls-expire

Immediately ends the poll. You cannot end polls from other users. Returns a message object. Fires a Message Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id",
    "message_id"
  ],
  "additionalProperties": false
}
```

### polls-get-answer-voters

Get a list of users that voted for a specific answer in a poll.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "message_id": {
      "type": "string"
    },
    "answer_id": {
      "type": "integer"
    },
    "after": {
      "type": "string"
    },
    "limit": {
      "type": "integer"
    }
  },
  "required": [
    "channel_id",
    "message_id",
    "answer_id"
  ],
  "additionalProperties": false
}
```

## Soundboards

### soundboards-create-guild-soundboard-sound

Create a new soundboard sound for the guild. Returns the new soundboard sound object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "SoundboardCreateRequest": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "volume": {
          "type": [
            "number",
            "null"
          ]
        },
        "emoji_id": {
          "type": [
            "string",
            "null"
          ]
        },
        "emoji_name": {
          "type": [
            "string",
            "null"
          ]
        },
        "sound": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "sound"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "SoundboardCreateRequest"
  ],
  "additionalProperties": false
}
```

### soundboards-delete-guild-soundboard-sound

Delete a soundboard sound from a guild. Returns 204 No Content on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "sound_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "sound_id"
  ],
  "additionalProperties": false
}
```

### soundboards-get-guild-soundboard-sound

Returns a soundboard sound object for the given guild and sound IDs.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "sound_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "sound_id"
  ],
  "additionalProperties": false
}
```

### soundboards-get-soundboard-default-sounds

Returns a list of the default sounds available in the soundboard.

**Request Schema:** None

### soundboards-list-guild-soundboard-sounds

Returns a list of soundboard sound objects for the given guild.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### soundboards-send-soundboard-sound

Sends a soundboard sound to a channel.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "SoundboardSoundSendRequest": {
      "type": "object",
      "properties": {
        "sound_id": {
          "type": "string"
        },
        "source_guild_id": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "required": [
        "sound_id"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "SoundboardSoundSendRequest"
  ],
  "additionalProperties": false
}
```

### soundboards-update-guild-soundboard-sound

Update a soundboard sound in a guild. Returns the updated soundboard sound object on success.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "sound_id": {
      "type": "string"
    },
    "SoundboardPatchRequestPartial": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "volume": {
          "type": [
            "number",
            "null"
          ]
        },
        "emoji_id": {
          "type": [
            "string",
            "null"
          ]
        },
        "emoji_name": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "sound_id",
    "SoundboardPatchRequestPartial"
  ],
  "additionalProperties": false
}
```

## Stage

### stage-instances-create

Creates a new Stage instance associated to a Stage channel. Returns that Stage instance. Fires a Stage Instance Create Gateway event. Requires the user to be a moderator of the Stage channel.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "topic": {
      "type": "string"
    },
    "channel_id": {
      "type": "string"
    },
    "privacy_level": {
      "anyOf": [
        {
          "type": "number",
          "const": 1
        },
        {
          "type": "null"
        }
      ]
    },
    "guild_scheduled_event_id": {
      "type": [
        "string",
        "null"
      ]
    },
    "send_start_notification": {
      "type": [
        "boolean",
        "null"
      ]
    }
  },
  "required": [
    "topic",
    "channel_id"
  ],
  "additionalProperties": false
}
```

### stage-instances-delete

Deletes the Stage instance. Returns 204 No Content. Fires a Stage Instance Delete Gateway event. Requires the user to be a moderator of the Stage channel.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### stage-instances-get

Gets the stage instance associated with the Stage channel, if it exists.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### stage-instances-update

Updates fields of an existing Stage instance. Returns the updated Stage instance. Fires a Stage Instance Update Gateway event. Requires the user to be a moderator of the Stage channel.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "topic": {
          "type": "string"
        },
        "privacy_level": {
          "type": "number",
          "const": 1
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

## Stickers

### stickers-create-guild-sticker

Create a new sticker for the guild. Send a multipart/form-data body. Requires the CREATE_GUILD_EXPRESSIONS permission. Returns the new sticker object on success. Fires a Guild Stickers Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "tags": {
          "type": "string"
        },
        "description": {
          "type": [
            "string",
            "null"
          ]
        },
        "file": {
          "type": "string"
        }
      },
      "required": [
        "name",
        "tags",
        "file"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### stickers-delete-guild-sticker

Delete the given sticker. For stickers created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other stickers, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns 204 No Content on success. Fires a Guild Stickers Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "sticker_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "sticker_id"
  ],
  "additionalProperties": false
}
```

### stickers-get

Returns a sticker object for the given sticker ID.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "sticker_id": {
      "type": "string"
    }
  },
  "required": [
    "sticker_id"
  ],
  "additionalProperties": false
}
```

### stickers-get-guild-sticker

Returns a sticker object for the given guild and sticker IDs. Includes the user field if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "sticker_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "sticker_id"
  ],
  "additionalProperties": false
}
```

### stickers-get-pack

Returns a sticker pack object for the given sticker pack ID.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "pack_id": {
      "type": "string"
    }
  },
  "required": [
    "pack_id"
  ],
  "additionalProperties": false
}
```

### stickers-list-guild-stickers

Returns an array of sticker objects for the given guild. Includes user fields if the bot has the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### stickers-update-guild-sticker

Modify the given sticker. For stickers created by the current user, requires either the CREATE_GUILD_EXPRESSIONS or MANAGE_GUILD_EXPRESSIONS permission. For other stickers, requires the MANAGE_GUILD_EXPRESSIONS permission. Returns the updated sticker object on success. Fires a Guild Stickers Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "sticker_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "tags": {
          "type": "string"
        },
        "description": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "sticker_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

## Users

### users-create-dm

Create a new DM channel with a user. Returns a DM channel object (if one already exists, it will be returned instead).

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "recipient_id": {
      "type": [
        "string",
        "null"
      ]
    },
    "access_tokens": {
      "anyOf": [
        {
          "type": "array",
          "items": {
            "type": "string"
          }
        },
        {
          "type": "null"
        }
      ]
    },
    "nicks": {
      "anyOf": [
        {
          "type": "object",
          "additionalProperties": {
            "type": [
              "string",
              "null"
            ]
          }
        },
        {
          "type": "null"
        }
      ]
    }
  },
  "additionalProperties": false
}
```

### users-get

Returns a user object for a given user ID.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "user_id": {
      "type": "string"
    }
  },
  "required": [
    "user_id"
  ],
  "additionalProperties": false
}
```

### users-get-application-role-connection

Returns the application role connection for the user. Requires an OAuth2 access token with role_connections.write scope for the application specified in the path.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    }
  },
  "required": [
    "application_id"
  ],
  "additionalProperties": false
}
```

### users-get-guild-member

Returns a guild member object for the current user. Requires the guilds.members.read OAuth2 scope.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### users-leave-guild

Leave a guild. Returns a 204 empty response on success. Fires a Guild Delete Gateway event and a Guild Member Remove Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### users-list-guilds

Returns a list of partial guild objects the current user is a member of.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "before": {
      "type": "string"
    },
    "after": {
      "type": "string"
    },
    "limit": {
      "type": "integer"
    },
    "with_counts": {
      "type": "boolean"
    }
  },
  "additionalProperties": false
}
```

### users-update-application-role-connection

Updates and returns the application role connection for the user. Requires an OAuth2 access token with role_connections.write scope for the application specified in the path.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "application_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "platform_name": {
          "type": [
            "string",
            "null"
          ]
        },
        "platform_username": {
          "type": [
            "string",
            "null"
          ]
        },
        "metadata": {
          "anyOf": [
            {
              "type": "object",
              "additionalProperties": {
                "type": "string"
              }
            },
            {
              "type": "null"
            }
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "application_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### users-update-current

Modify the requester's user account settings. Returns a user object on success. Fires a User Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "username": {
      "type": "string"
    },
    "avatar": {
      "type": [
        "string",
        "null"
      ]
    },
    "banner": {
      "type": [
        "string",
        "null"
      ]
    }
  },
  "required": [
    "username"
  ],
  "additionalProperties": false
}
```

## Voice

### voice-get-current-user-state

Returns the current user's voice state in the guild.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### voice-get-user-state

Returns the specified user's voice state in the guild.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id",
    "user_id"
  ],
  "additionalProperties": false
}
```

### voice-list-regions

Returns an array of voice region objects that can be used when setting a voice or stage channel's rtc_region.

**Request Schema:** None

### voice-update-current-user-state

Updates the current user's voice state. Returns 204 No Content on success. Fires a Voice State Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "request_to_speak_timestamp": {
          "anyOf": [
            {
              "type": "string",
              "format": "date-time"
            },
            {
              "type": "null"
            }
          ]
        },
        "suppress": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "channel_id": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### voice-update-user-state

Updates another user's voice state. Fires a Voice State Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    },
    "user_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "suppress": {
          "type": [
            "boolean",
            "null"
          ]
        },
        "channel_id": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "guild_id",
    "user_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

## Webhooks

### webhooks-create

Creates a new webhook and returns a webhook object on success. Requires the MANAGE_WEBHOOKS permission. Fires a Webhooks Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "avatar": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "required": [
        "name"
      ],
      "additionalProperties": false
    }
  },
  "required": [
    "channel_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

### webhooks-delete

Delete a webhook permanently. Requires the MANAGE_WEBHOOKS permission. Returns a 204 No Content response on success. Fires a Webhooks Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "webhook_id": {
      "type": "string"
    }
  },
  "required": [
    "webhook_id"
  ],
  "additionalProperties": false
}
```

### webhooks-get

Returns the new webhook object for the given id.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "webhook_id": {
      "type": "string"
    }
  },
  "required": [
    "webhook_id"
  ],
  "additionalProperties": false
}
```

### webhooks-list-for-channel

Returns a list of channel webhook objects. Requires the MANAGE_WEBHOOKS permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "channel_id": {
      "type": "string"
    }
  },
  "required": [
    "channel_id"
  ],
  "additionalProperties": false
}
```

### webhooks-list-for-guild

Returns a list of guild webhook objects. Requires the MANAGE_WEBHOOKS permission.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "guild_id": {
      "type": "string"
    }
  },
  "required": [
    "guild_id"
  ],
  "additionalProperties": false
}
```

### webhooks-update

Modify a webhook. Requires the MANAGE_WEBHOOKS permission. Returns the updated webhook object on success. Fires a Webhooks Update Gateway event.

**Request Schema:**

```json
{
  "type": "object",
  "properties": {
    "webhook_id": {
      "type": "string"
    },
    "RequestBody": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string"
        },
        "avatar": {
          "type": [
            "string",
            "null"
          ]
        },
        "channel_id": {
          "type": [
            "string",
            "null"
          ]
        }
      },
      "additionalProperties": false
    }
  },
  "required": [
    "webhook_id",
    "RequestBody"
  ],
  "additionalProperties": false
}
```

