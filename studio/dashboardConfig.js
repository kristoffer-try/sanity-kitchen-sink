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
                  buildHookId: '631747883c345f09a4d145ed',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-zabgn2ts',
                  apiId: '4bfb51c7-2d62-479c-85a4-fb56b72c21d0'
                },
                {
                  buildHookId: '63174788d38f4f0497b56889',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-wqzueeey',
                  apiId: 'da6b21a9-f45f-44d0-974d-87f8ac9920d2'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/kristoffer-try/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-wqzueeey.netlify.app', category: 'apps'}
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
