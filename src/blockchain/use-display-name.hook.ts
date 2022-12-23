import { useEnsName } from "wagmi";

interface useDisplayProps {
  address: `0x${string}` | undefined;
}

export const useDisplayName = (props: useDisplayProps) => {
  const { address } = props;
  const { data: name, isLoading } = useEnsName({ address });
  const shortAddress = useShortAddress(address);
  const shortName = useShortName(name);

  if (isLoading) return shortAddress;

  if (shortName) return shortName;
  else return shortAddress;
};

export const useShortAddress = (address: `0x${string}` | undefined) => {
  if (address?.slice(0, 2) === "0x") {
    return `0x ${address?.slice(2, 6).toLowerCase()}...${address
      ?.slice(-4)
      .toLowerCase()}`;
  } else
    return `${address?.slice(0, 4).toLowerCase()}...${address
      ?.slice(-4)
      .toLowerCase()}`;
};

export const useShortName = (name: string | null | undefined) => {
  const maxLength = 14;

  if (!name) return;
  if (name.length <= maxLength) return name;
  else return `${name.slice(0, maxLength)}...eth`;
};
