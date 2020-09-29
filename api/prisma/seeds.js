const faker = require('faker')
/* eslint-disable no-console */
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

const NUM_OF_POSTS = 50

async function main() {
  const postData = []
  for (let i = 0; i <= NUM_OF_POSTS; i++) {
    postData.push({
      title: i + faker.company.bsBuzz(),
      body: faker.lorem.paragraphs(),
      createdAt: faker.date.recent(),
      publishedAt: faker.date.recent(),
    })
    console.log(postData[i].title)
  }

  const posts = []

  await asyncForEach(postData, async (post) => {
    console.log(`Creating ${post.title}...`)
    posts.push(
      await prisma.post.create({
        data: post,
      })
    )
  })

  console.info(`\nSeeded ${postData.length} posts\n`)
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect()
  })
