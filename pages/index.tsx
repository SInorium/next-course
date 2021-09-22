import axios from "axios";
import { GetStaticProps } from "next";
import React from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";
import { MenuItem } from "../interfaces/menu.interface";
import { Layout, withLayout } from "../layout/Layout";

function Home({ menu, firstCategory }: HomeProps): JSX.Element {
  const [rating, setRating] = React.useState<number>(3);

  return (
    <>
      <Htag tag="h3">заголовок</Htag>
      <Button appearance="primary" arrow="right">
        button
      </Button>
      <Button appearance="ghost" arrow="down">
        button
      </Button>
      <Paragraph size="large">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam velit
        aspernatur doloremque accusantium eius veritatis iste quam quisquam
        minima perspiciatis.
      </Paragraph>
      <Tag size={"medium"} color={"ghost"}>
        meidum ghost
      </Tag>
      <Tag size={"small"} color={"primary"}>
        small primary
      </Tag>
      <Tag size={"small"} color={"red"}>
        small primary
      </Tag>
      <Tag size={"small"} color={"green"}>
        small primary
      </Tag>
      <ul>
        {menu.map((m) => (
          <li key={m._id.secondCategory}>{m._id.secondCategory}</li>
        ))}
      </ul>
      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(
    "https://courses-top.ru/api/top-page/find"
  );
  return {
    props: {
      menu,
      firstCategory,
    },
  };
};

interface HomeProps extends Record<string, unknown> {
  menu: MenuItem[];
  firstCategory: number;
}

export default withLayout(Home);
