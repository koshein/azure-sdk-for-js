/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { CloudErrorMapper, BaseResourceMapper } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export const CloudError = CloudErrorMapper;
export const BaseResource = BaseResourceMapper;

export const ClassicAdministrator: msRest.CompositeMapper = {
  serializedName: "ClassicAdministrator",
  type: {
    name: "Composite",
    className: "ClassicAdministrator",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      emailAddress: {
        serializedName: "properties.emailAddress",
        type: {
          name: "String"
        }
      },
      role: {
        serializedName: "properties.role",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProviderOperation: msRest.CompositeMapper = {
  serializedName: "ProviderOperation",
  type: {
    name: "Composite",
    className: "ProviderOperation",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "description",
        type: {
          name: "String"
        }
      },
      origin: {
        serializedName: "origin",
        type: {
          name: "String"
        }
      },
      properties: {
        serializedName: "properties",
        type: {
          name: "Object"
        }
      },
      isDataAction: {
        serializedName: "isDataAction",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ResourceType: msRest.CompositeMapper = {
  serializedName: "ResourceType",
  type: {
    name: "Composite",
    className: "ResourceType",
    modelProperties: {
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      operations: {
        serializedName: "operations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProviderOperation"
            }
          }
        }
      }
    }
  }
};

export const ProviderOperationsMetadata: msRest.CompositeMapper = {
  serializedName: "ProviderOperationsMetadata",
  type: {
    name: "Composite",
    className: "ProviderOperationsMetadata",
    modelProperties: {
      id: {
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      displayName: {
        serializedName: "displayName",
        type: {
          name: "String"
        }
      },
      resourceTypes: {
        serializedName: "resourceTypes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ResourceType"
            }
          }
        }
      },
      operations: {
        serializedName: "operations",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProviderOperation"
            }
          }
        }
      }
    }
  }
};

export const Permission: msRest.CompositeMapper = {
  serializedName: "Permission",
  type: {
    name: "Composite",
    className: "Permission",
    modelProperties: {
      actions: {
        serializedName: "actions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      notActions: {
        serializedName: "notActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      dataActions: {
        serializedName: "dataActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      notDataActions: {
        serializedName: "notDataActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const RoleDefinitionFilter: msRest.CompositeMapper = {
  serializedName: "RoleDefinitionFilter",
  type: {
    name: "Composite",
    className: "RoleDefinitionFilter",
    modelProperties: {
      roleName: {
        serializedName: "roleName",
        type: {
          name: "String"
        }
      },
      type: {
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RoleDefinition: msRest.CompositeMapper = {
  serializedName: "RoleDefinition",
  type: {
    name: "Composite",
    className: "RoleDefinition",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      roleName: {
        serializedName: "properties.roleName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      roleType: {
        serializedName: "properties.type",
        type: {
          name: "String"
        }
      },
      permissions: {
        serializedName: "properties.permissions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Permission"
            }
          }
        }
      },
      assignableScopes: {
        serializedName: "properties.assignableScopes",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const RoleAssignmentFilter: msRest.CompositeMapper = {
  serializedName: "RoleAssignmentFilter",
  type: {
    name: "Composite",
    className: "RoleAssignmentFilter",
    modelProperties: {
      principalId: {
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      canDelegate: {
        serializedName: "canDelegate",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const RoleAssignment: msRest.CompositeMapper = {
  serializedName: "RoleAssignment",
  type: {
    name: "Composite",
    className: "RoleAssignment",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      scope: {
        serializedName: "properties.scope",
        type: {
          name: "String"
        }
      },
      roleDefinitionId: {
        serializedName: "properties.roleDefinitionId",
        type: {
          name: "String"
        }
      },
      principalId: {
        serializedName: "properties.principalId",
        type: {
          name: "String"
        }
      },
      canDelegate: {
        serializedName: "properties.canDelegate",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const RoleAssignmentCreateParameters: msRest.CompositeMapper = {
  serializedName: "RoleAssignmentCreateParameters",
  type: {
    name: "Composite",
    className: "RoleAssignmentCreateParameters",
    modelProperties: {
      roleDefinitionId: {
        required: true,
        serializedName: "properties.roleDefinitionId",
        type: {
          name: "String"
        }
      },
      principalId: {
        required: true,
        serializedName: "properties.principalId",
        type: {
          name: "String"
        }
      },
      canDelegate: {
        serializedName: "properties.canDelegate",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const DenyAssignmentFilter: msRest.CompositeMapper = {
  serializedName: "DenyAssignmentFilter",
  type: {
    name: "Composite",
    className: "DenyAssignmentFilter",
    modelProperties: {
      denyAssignmentName: {
        serializedName: "denyAssignmentName",
        type: {
          name: "String"
        }
      },
      principalId: {
        serializedName: "principalId",
        type: {
          name: "String"
        }
      },
      gdprExportPrincipalId: {
        serializedName: "gdprExportPrincipalId",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DenyAssignmentPermission: msRest.CompositeMapper = {
  serializedName: "DenyAssignmentPermission",
  type: {
    name: "Composite",
    className: "DenyAssignmentPermission",
    modelProperties: {
      actions: {
        serializedName: "actions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      notActions: {
        serializedName: "notActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      dataActions: {
        serializedName: "dataActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      },
      notDataActions: {
        serializedName: "notDataActions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "String"
            }
          }
        }
      }
    }
  }
};

export const Principal: msRest.CompositeMapper = {
  serializedName: "Principal",
  type: {
    name: "Composite",
    className: "Principal",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DenyAssignment: msRest.CompositeMapper = {
  serializedName: "DenyAssignment",
  type: {
    name: "Composite",
    className: "DenyAssignment",
    modelProperties: {
      id: {
        readOnly: true,
        serializedName: "id",
        type: {
          name: "String"
        }
      },
      name: {
        readOnly: true,
        serializedName: "name",
        type: {
          name: "String"
        }
      },
      type: {
        readOnly: true,
        serializedName: "type",
        type: {
          name: "String"
        }
      },
      denyAssignmentName: {
        serializedName: "properties.denyAssignmentName",
        type: {
          name: "String"
        }
      },
      description: {
        serializedName: "properties.description",
        type: {
          name: "String"
        }
      },
      permissions: {
        serializedName: "properties.permissions",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DenyAssignmentPermission"
            }
          }
        }
      },
      scope: {
        serializedName: "properties.scope",
        type: {
          name: "String"
        }
      },
      doNotApplyToChildScopes: {
        serializedName: "properties.doNotApplyToChildScopes",
        type: {
          name: "Boolean"
        }
      },
      principals: {
        serializedName: "properties.principals",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Principal"
            }
          }
        }
      },
      excludePrincipals: {
        serializedName: "properties.excludePrincipals",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Principal"
            }
          }
        }
      },
      isSystemProtected: {
        serializedName: "properties.isSystemProtected",
        type: {
          name: "Boolean"
        }
      }
    }
  }
};

export const ClassicAdministratorListResult: msRest.CompositeMapper = {
  serializedName: "ClassicAdministratorListResult",
  type: {
    name: "Composite",
    className: "ClassicAdministratorListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ClassicAdministrator"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const ProviderOperationsMetadataListResult: msRest.CompositeMapper = {
  serializedName: "ProviderOperationsMetadataListResult",
  type: {
    name: "Composite",
    className: "ProviderOperationsMetadataListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "ProviderOperationsMetadata"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const PermissionGetResult: msRest.CompositeMapper = {
  serializedName: "PermissionGetResult",
  type: {
    name: "Composite",
    className: "PermissionGetResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "Permission"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RoleAssignmentListResult: msRest.CompositeMapper = {
  serializedName: "RoleAssignmentListResult",
  type: {
    name: "Composite",
    className: "RoleAssignmentListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RoleAssignment"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const RoleDefinitionListResult: msRest.CompositeMapper = {
  serializedName: "RoleDefinitionListResult",
  type: {
    name: "Composite",
    className: "RoleDefinitionListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "RoleDefinition"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};

export const DenyAssignmentListResult: msRest.CompositeMapper = {
  serializedName: "DenyAssignmentListResult",
  type: {
    name: "Composite",
    className: "DenyAssignmentListResult",
    modelProperties: {
      value: {
        serializedName: "",
        type: {
          name: "Sequence",
          element: {
            type: {
              name: "Composite",
              className: "DenyAssignment"
            }
          }
        }
      },
      nextLink: {
        serializedName: "nextLink",
        type: {
          name: "String"
        }
      }
    }
  }
};
