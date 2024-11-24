"use client";

const error = ({ error, reset }: { error: any; reset: () => void }) => {
  const status = error?.status;

  return <div>{status}</div>;
};
export default error;
