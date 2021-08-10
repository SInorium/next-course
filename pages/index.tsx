import React from "react";
import { Button, Htag, Paragraph } from "../components";
import { Tag } from "../components/Tag/Tag";

export default function Home(): JSX.Element {
  const [counter, setCounter] = React.useState<number>(0);

  React.useEffect(() => {
    console.log(counter + " Counter");
    return function cleanup() {
      console.log("unmount");
    };
  }, [counter]);

  React.useEffect(() => {
    counter > 3 && console.log("mountedDDDDD");
  });
  return (
    <>
      <Htag tag="h3">заголовок</Htag>
      <Button
        appearance="primary"
        arrow="right"
        onClick={() => setCounter((x) => x + 1)}
      >
        button {counter}
      </Button>
      <Button
        appearance="ghost"
        arrow="down"
        onClick={() => setCounter(counter - 1)}
      >
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
    </>
  );
}
