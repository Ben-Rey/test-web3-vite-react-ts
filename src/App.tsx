import { useEffect, useState } from "react";
import {
  Client,
  ClientFactory,
  DefaultProviderUrls,
  IAccount,
} from "@massalabs/massa-web3";

export default function App() {
  const [account, setAccount] = useState<IAccount | null>(null);

  const init = async () => {
    const baseAccount = {
      address: "AU12PWTzCKkkE9P5Supt3Fkb4QVZ3cdfB281TGaup7Nv1DY12a6F1",
      secretKey: "S12tw4YShWtjWfy7YBQ9Erbcg6DYgWnMgb5hGjn9hAKGtgrLNa7L",
      publicKey: "P1hG8zRRJF2v3qkwyZ2fnHJeaVw9uT4huCkwcWJVvgypEz6D2aR",
    } as IAccount;

    const testnetClient: Client = await ClientFactory.createDefaultClient(
      DefaultProviderUrls.TESTNET,
      true,
      baseAccount
    );
    setAccount(testnetClient.wallet().getBaseAccount());
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <main>
      <p>account: {account?.address}</p>
      <p>account private key : {account?.publicKey}</p>
      <p>account secret key : {account?.secretKey}</p>
    </main>
  );
}
