import React, { useState, useEffect } from "react";
import { Container, Card } from "react-bootstrap";
import axios from "axios";

const JobList = () => {
  const [data, setData] = useState(null);
  // Indikator
  const [fetchStatus, setFetchStatus] = useState(true);

  useEffect(() => {
    let fetchData = async () => {
      let res = await axios.get(
        `http://dev3.dansmultipro.co.id/api/recruitment/positions.json`
      );
      setData(res.data);
      console.log("Data Log", res.data);
    };
    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);

  return (
    <>
      <Container>
        <Card>
          <Card.Body>
            <h1>Job List</h1>
            <div className="row g-0 border-top border-bottom align-items-center justify-content-between pb">
              {data !== null &&
                data.map((res, index) => {
                  return (
                    <>
                      <div className="col-sm-6 col-md-8 border-bottom">
                        <a href="/" className="row">
                          <div className="col-xxl-3">
                            <h1 href="/" className="job-title">
                              {res.title}
                            </h1>
                          </div>
                          <div className="col">
                            <div className="row row-cols-2">
                              <div className="col-lg-7">
                                <p className="job-company">{res.company}</p>
                              </div>
                              <div className="col-lg-2">
                                <p className="job-status">{res.type}</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                      <div className="col-sm-6 col-md-4 border-bottom">
                        <div className="row">
                          <div className="col">
                            <div className="row row-cols-2 justify-content-end align-items-end text-end">
                              <div className="col-lg-4">
                                <p className="job-company">{res.location}</p>
                              </div>
                              <div className="col-lg-4">
                                <p className="job-company">{res.created_at}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  );
                })}
            </div>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default JobList;
