import styles from '../styles/books.module.css'
import { NavBar } from "../components/nav-bar";
import React from 'react';
import { About } from '../components/about';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';


const { Client } = require("@notionhq/client")


// Initializing a client
const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})


type Entry = {
  title: string,
  isRead: string
}


type PageProps = {
  entries: Entry[]
}


export async function getStaticProps() {
  const databaseId = '1a2846bdd6be4a2c9366f0dae3c1106e';
  const query = await notion.databases.query({
    database_id: databaseId,
  })
  let titleList: Entry[] = []
  for (let el of query.results) {
    const pageContent = await notion.pages.retrieve({ page_id: el.id });
    const pageTitle: string | undefined = pageContent.properties.Title.title[0]?.plain_text;
    const isRead: string | undefined = pageContent.properties.Read.rich_text[0]?.plain_text;
    if (pageTitle != undefined && isRead != undefined) {
      titleList.push({ title: pageTitle, isRead: isRead })
    }
  }
  // titleList = await Promise.all(titleList);
  return ({
    props: { entries: titleList }
  })
}


export default function Books({ entries }: PageProps) {
  return (
    <div className={styles.container}>
      <NavBar />
      <div className={styles.mainWrapper}>
        <div className={styles.aboutWrapper}><About /></div>
        <div className={styles.contentsWrapper}>
          <div className={styles.text}>
            I keep an ever-changing list of books I have read and those I still want to check out. I&apos;m always looking for recommendations, so don&apos;t hesitate to share your favorites with me!
          </div>
          {
            entries.map((el, i) => {
              return (
                <div className={styles.itemWrapper} key={el.title + i + 0}>
                  {el.isRead == "true" ? <CheckCircleIcon key={el.title + i + 1} /> : <RadioButtonUncheckedIcon key={el.title + i + 1} />}
                  <div key={el.title + i + 2} style={{ paddingLeft: "10px" }}>{`${el.title}`}</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}
