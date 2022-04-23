export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '626420fd24f612528998a320',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-c4chw97j',
                  apiId: 'e3102f2a-aa7e-4940-b4fc-633d5d7ac593'
                },
                {
                  buildHookId: '626420fdbe3a434d6a7f3cef',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-jaz8xkr1',
                  apiId: '83d998d7-2314-4e68-9c2b-fec282061f09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/askcgan/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-jaz8xkr1.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
