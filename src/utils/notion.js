const { Client } = require("@notionhq/client");
const { NotionToMarkdown } = require("notion-to-md");

// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_TOKEN,
})

const n2m = new NotionToMarkdown({ notionClient: notion });

const databaseId = process.env.NOTION_DATABASE_ID;

async function getDatabase(){
    const response = await notion.databases.query({
        database_id: databaseId,
        filter: {
            property: "Publish",
            checkbox: {
            equals: true
            }
        }
    });
    return response
}

async function getPost(pageId) {
    const mdblocks = await n2m.pageToMarkdown(pageId);
    const mdString = n2m.toMarkdownString(mdblocks);
    return(mdString.parent);
}

module.exports = {
    getDatabase,
    getPost,
    notion
}