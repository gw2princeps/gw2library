import Layout from "@/components/Layout";
import classes from "@/styles/Home.module.css";
import { Button, Classes, H1 } from "@blueprintjs/core";
import Image from "next/image";
import { ReactElement } from "react";
import optimizerCopy from "src/assets/optimizerCopy.png";
import preview from "src/assets/preview.png";
import bg_library from "src/assets/library_1.jpeg";
export default function Page() {
  return (
    <>
      <div className={classes.wrapper}>
        <div className={`${classes.firstPage} ${classes.page}`}>
          <h1 className={classes.title}>GW2 Library</h1>
          <p>Create and share builds with descriptions in seconds</p>
          <p>Login securely with GW2Auth</p>
          <a
            className={classes.mb10}
            href="https://gw2library.princeps.biz/builds/20cd69ae-e576-41ed-adee-95530dc20457"
          >
            <Button intent="success">Example Build</Button>
          </a>
          <p style={{ fontSize: 60 }}>↓</p>
        </div>

        <div className={classes.page}>
          <H1>Tutorial</H1>

          <ol className={Classes.LIST}>
            <li>
              Sign in with <a href="https://gw2auth.com">gw2auth</a>. With
              GW2auth you can only grant the required permissions to an
              application without sharing your API-key.
            </li>
            <li>Click on &quot;Add Build&quot; and fill out the form:</li>
            <ol>
              <li>
                Create your optimal build with the{" "}
                <a href="https://optimizer.discretize.eu/?m=fractals">
                  Gear Optimizer
                </a>
              </li>
              <li>
                Navigate to the Development section at the bottom, insert your
                weapons and skills and copy the JSON. <br />
                <Image
                  src={optimizerCopy}
                  className={classes.image}
                  width={300}
                  style={{
                    maxWidth: "300px",
                  }}
                  placeholder="blur"
                  loading="lazy"
                  alt="Find the development section and copy the JSON from the optimizer"
                />
              </li>
              <li>Paste this JSON into the form. A preview appears.</li>
              <li>
                Add a name and a description.
                <br />
                <div style={{ position: "relative" }}>
                  <Image
                    className={classes.image}
                    style={{
                      maxWidth: "800px",
                    }}
                    src={preview}
                    placeholder="blur"
                    loading="lazy"
                    width={1900}
                    height={891}
                    alt="Preview of the add build form"
                  />
                </div>
              </li>
            </ol>
            <li>Hit save</li>
          </ol>
        </div>
      </div>
    </>
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout
      BackgroundImage={
        <Image
          alt="background"
          placeholder="blur"
          src={bg_library}
          className={classes.bgImage}
        />
      }
    >
      {page}
    </Layout>
  );
};
