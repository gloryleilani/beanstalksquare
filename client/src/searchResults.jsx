// ***** TeacherList and PodList components used in zipcode search results *****

import React from 'react';
import { Link, useParams } from 'react-router-dom';
import Pod from './Pod';
import Teacher from './Teacher';

export function PodList(props) {
  
  const [podList, setPodList] = React.useState([]);
  const {zipcode} = useParams();

  React.useEffect(() => {
    fetch(`/api/pods?zipcode=${zipcode}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      setPodList(data);
    }) 
  }, [zipcode]); 

  return ( 
    <div className="mx-auto" id="pod-list-title-row"><br/>
      <span className="float-left"> 
        <h3>{zipcode} Pod Results</h3><br/>
      </span>
      <span className="float-right">
        {props.isLoggedIn==="True"? <Link key={1} to="/createpod" className="btn btn-primary" variant="btn-primary" > Start a pod </Link>: null}
      </span><br/><br/>
      <div className="search-results-wrapper">
        {podList.map(pod => <Pod key={pod.pod_id}
                                pod_id={pod.pod_id}
                                pod_name={pod.pod_name}
                                zipcode={pod.zipcode}
                                days_per_week={pod.days_per_week}
                                total_hours_per_day={pod.total_hours_per_day}
                                paid_teacher={pod.paid_teacher}
                                isLoggedIn={props.isLoggedIn}
                                />)}
                                <br/><br/>
      </div>
    </div>
  );
} 


export function TeacherList(props) {
  
  const [teacherList, setTeacherList] = React.useState([]);
  const {zipcode} = useParams();

  React.useEffect(() => {
    fetch(`/api/teachers?zipcode=${zipcode}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
    })
    .then(response => response.json())
    .then(data => {
      console.log("data:", data);
      setTeacherList(data);
    })
  },[zipcode]); 

  return ( 
    <div>
      <div>
        <br/><h3 className="mx-auto" id="teacher-list-title-row">{zipcode} Teacher Results</h3><br/>
      </div> 
      <div className="search-results-wrapper">
        {teacherList.map(teacher => 
                            // if (teacher.pod_id === undefined)
                              <Teacher key={teacher.teacher_id}
                                  teacher_id={teacher.teacher_id}
                                  bio={teacher.bio}
                                  email={teacher.email}
                                  mobile_number={teacher.mobile_number}
                                  teacher_name={teacher.fname+" "+teacher.lname}
                                  zipcode={teacher.zipcode}
                                  pod_id={teacher.pod_id}
                                  img_url={teacher.img_url}
                                  days_of_week={teacher.days_of_week}
                                  teaching_experience_in_hours={teacher.teaching_experience_in_hours}
                                  pay_rate_per_hour={teacher.pay_rate_per_hour}
                                  isLoggedIn={props.isLoggedIn}
                                  />
                                )}                      
      </div><br/>
    </div>
  );
} 

