import { Address } from "../../src/pages";

import { GetServerSideProps } from "next";

export interface IAddressProps {
  query: {
    address: `0x${string}`;
    blockchain: string;
  };
}

const Page = (props: IAddressProps) => {
  const { query } = props;
  return <Address query={query} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const query = context.query;
  return {
    props: { query },
  };
};

export default Page;
