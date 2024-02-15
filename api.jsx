import Image from "next/image";
import styles from "./page.module.css";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [res, setRes] = useState(null);
  const [loading, setLoading] = useState(true);
  const accessToken = "";
  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiBody = {};
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        };
        const response = await axios.post(
          "https://api.example.com/data",
          config,
          apiBody,
        );
        setRes(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (!data) return null;

  return <div>{JSON.stringify(res)}</div>;
}
