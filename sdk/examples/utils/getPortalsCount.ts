import VeraxSdk from "../../src/VeraxSdk";

const veraxSdk = new VeraxSdk(VeraxSdk.DEFAULT_LINEA_TESTNET);

veraxSdk.utils.getPortalsCount().then((res) => console.log(res));
