import React from "react";
import { Button, Htag, Paragraph, Rating, Tag } from "../components";
import { Layout, withLayout } from "../layout/Layout";

function Home(): JSX.Element {
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

      <Rating rating={rating} isEditable setRating={setRating} />
    </>
  );
}

export default withLayout(Home);
