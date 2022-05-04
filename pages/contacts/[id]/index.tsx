import { useRouter } from "next/router";
import React from "react";

const ContactId = () => {
  const { query } = useRouter();

  return <div>Contact with id {query?.id}</div>;
};

export default ContactId;
