import React from 'react';
import SkillList from '../components/Skills/';

const Resume = () => {
  return (
    <div className="resume">
      <div className="resume-header">
        <h1 className="">ANTHONY LOMBARDI</h1>
        <h3 className="text-2xl text-blog-red">Full Stack Developer</h3>
      </div>
      <div className="resume-body-wrapper border-t-2 border-gray-c7">
        <div className="flex flex-row">
          <div className="flex-initial skills-hobbies border-r-2 border-gray-c7">
            <div className="skills">
              <h1>SKILLS</h1>
              <hr />
              <div className="py-4">
                <SkillList />
              </div>
            </div>

            <div className="hobbies">
              <h1>HOBBIES</h1>
              <hr />
              <p>
                Building guitars && Woodworking , Playing Guitar, Cooking,
                Spending Time with my two Children, and Exploring the Outdoors.
              </p>
            </div>
          </div>
          <div className="flex-auto w-full resume-main">
            <div className="profile">
              <h1>PROFILE</h1>
              <hr />
              <p className="border-b-2 border-gray-c7">
                Meticulous & motivated Full Stack Developer with 10+ years of
                hands-on experience in: IT, Ruby on Rails, E-Commerce, Project
                Management, Development, and Consulting through the Full
                Software Life Cycle.
              </p>
            </div>
            <div className="employment-history border-b-2 border-gray-c7">
              <h1>EMPLOYMENT HISTORY</h1>
              <hr />
              {/* LENDKEY  */}
              <div className="employment mb-4">
                <div className="grid grid-cols-4">
                  <div className="col-span-3 text-left font-bold text-blog-red">
                    Software Engineer, LendKey Technologies
                  </div>
                  <div className="text-right">New York City</div>
                </div>
                <p className="employment-date">Oct 2017 — Jun 2020</p>
                <div className="highlights">
                  <ul className="list-inside list-disc">
                    <li>
                      Built and maintained APIs, moving away from Legacy
                      Monolith infrastructure to a more domain-driven micro
                      service through Docker Ruby on Rails, Java Spring-Boot and
                      ReactJS
                    </li>
                    <li>
                      Worked with ReactJS and TypeScript to build a front end
                    </li>
                    <li>
                      Used higher order of components to make small, reusable
                      sections{' '}
                    </li>
                    <li>Built login feature using MS Azure, JWT, and Apigee</li>
                    <li>
                      Utilized crucial design software skills to complete
                      projects
                    </li>
                    <li>
                      Effectively coded software changes and alterations based
                      on speciqc design re’uirements
                    </li>
                    <li>
                      Applied & stayed current with existing and emerging
                      technologies{' '}
                    </li>
                    <li>
                      Brought forth a passion and dedication to software
                      development
                    </li>
                  </ul>
                </div>
              </div>
              {/* TMPG  */}
              <div className="employment mb-4">
                <div className="grid grid-cols-4">
                  <div className="col-span-3 text-left font-bold text-blog-red">
                    Full-Stack Developer, TMPG
                  </div>
                  <div className="text-right">White Plains, NY</div>
                </div>
                <p className="employment-date">Aug 2015 — Oct 2017</p>
                <div className="highlights">
                  <ul className="list-inside list-disc">
                    <li>
                      Managed a development team building rich, interactive
                      websites
                    </li>
                    <li>
                      Built and maintained new infrastructures while merging our
                      legacy infrastructure over
                    </li>
                    <li>
                      Brought forth extensive experience developing API's to
                      connect and curate new and existing data through multiple
                      platforms
                    </li>
                    <li>
                      Implemented procedural changes in server infrastructures
                    </li>
                    <li>
                      Created new internal portal for managing client data and
                      assets
                    </li>
                    <li>Successfully worked to meet tight client deadlines</li>
                    <li>Worked well with internal and external teams</li>
                  </ul>
                </div>
              </div>

              {/* Ferguson */}
              <div className="employment mb-4">
                <div className="grid grid-cols-4">
                  <div className="col-span-3 text-left font-bold text-blog-red">
                    Full-Stack Developer, Ferguson Enterprise
                  </div>
                  <div className="text-right">Goshen, NY</div>
                </div>
                <p className="employment-date">Apr 2013 — Jul 2015</p>
                <div className="highlights">
                  <ul className="list-inside list-disc">
                    <li>
                      Transformed a large e-commerce website with new Ruby on
                      Rails back-end technology
                    </li>
                    <li>
                      Maintained stores􏰀 locations, websites and back-end
                      databases
                    </li>
                    <li>
                      Developed a user-friendly SMS solution for customer
                      service
                    </li>
                  </ul>
                </div>
              </div>
              {/*  */}
            </div>
            <div className="education pt-5">
              <h1>EDUCATION</h1>
              <hr />
              <div className="grid grid-cols-4">
                <div className="col-span-3 text-left font-bold text-gray-dark">
                  CSM, College of Westchester
                </div>
                <div className="text-right">White Plains, NY</div>
              </div>
              <p className="employment-date">Sep 2004 — May 2006</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
