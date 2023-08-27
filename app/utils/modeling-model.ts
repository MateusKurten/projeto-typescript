const generateResource = (model: object, properties:object|null=null, actions:object|null=null) => {
    return {
        resource: model,
        options: {
          properties: {
            createdAt: {
              isVisible: { add:false, edit: false, list: true, show: true, filter: false }
            },
            updatedAt: {
              isVisible: { add:false, edit: false, list: true, show: true, filter: false }
            },
            ...properties
          },
          actions: actions
        }
      }
}

export { generateResource }