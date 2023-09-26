import React, { useMemo } from "react";
import classNames from "../../../utils/className";

interface Props {
  loading: boolean;
  children: React.ReactNode;
  number?: number;
  style?: string;
}

const Skeleton: React.FC<Props> = ({
  loading = true,
  children,
  number,
  style,
}) => {
  const numberQuantity = useMemo(() => {
    return new Array(number).fill(0);
  }, [number]);

  return (
    <>
      {loading
        ? numberQuantity.map((_, index) => (
            <div
              className={classNames(
                "animate-pulse bg-[#00000060] w-full",
                style
              )}
              key={index}
            />
          ))
        : children}
    </>
  );
};

export default Skeleton;
