import Tracking from "@/component/tracking";
import { useRouter } from "next/router";

const TrackingByCnComponent = () => {
  const route = useRouter();

  return <Tracking route={(route?.query?.cn as string) || ""} />;
};

export default TrackingByCnComponent;
