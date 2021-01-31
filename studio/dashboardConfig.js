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
                  buildHookId: '6016c4b5d3430b273bc87b2e',
                  title: 'Sanity Studio',
                  name: 'sanity-test-studio-qjojhmv8',
                  apiId: '344678b7-6a9f-4485-828f-cf7a7103d8d3'
                },
                {
                  buildHookId: '6016c4b513fd1766ee3eecf6',
                  title: 'Blog Website',
                  name: 'sanity-test-web-pph9h9mr',
                  apiId: 'bcab7dfe-19f4-4318-be66-2109786af7dc'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/firesoflife/sanity-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-test-web-pph9h9mr.netlify.app', category: 'apps'}
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
