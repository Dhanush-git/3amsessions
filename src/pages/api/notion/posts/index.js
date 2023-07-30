// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { getDatabase } from "@/utils/notion"

export default async function handler(req, res) {
  let posts = await getDatabase()
  res.status(200).json(posts)
}
