import classes from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className={classes.wrapper}>
        <h1 className={classes.title}>GW2 Library for builds.</h1>
        <p>Create, and share builds with descriptions in seconds</p>
        <p>Login securely with GW2Auth</p>
      </div>
    </>
  );
}
