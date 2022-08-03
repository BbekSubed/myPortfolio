import React from 'react'
import{BiCheck} from 'react-icons/bi'
import './services.css'

const Services = () => {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit, amet consectetur adi odio itaque tempora amet? Quis error iusto sunt quod nesciunt!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit, amet consectetur adipodio itaque tempora amet? Quis error iusto sunt quod nesciunt!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, illo, rem quam perferendis est laudantium a quos, soluta vel debitis odio itaque tempora amet? Quis error iusto sunt quod nesciunt!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit, amet consectet odio itaque tempora amet? Quis error iusto sunt quod nesciunt!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit, amet consectetur adi odio itaque tempora amet? Quis error iusto sunt quod nesciunt!</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, illo, rem quam perferendis est laudantium a quos, soluta vel debitis odio itaque tempora amet? Quis error iusto sunt quod nesciunt!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, illo, rem quam perferendis est laudantium a quos, soluta vel debitis odio itaque tempora amet? Quis error iusto sunt quod nesciunt!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, illo, rem quam perferendis est laudantium a quos, soluta vel debitis odio itaque tempora amet? Quis error iusto sunt quod nesciunt!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit,!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit,</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service__head">
            <h3>Software Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit,!</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit,</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit, !</p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit, </p>
            </li>
            <li>
              <BiCheck className="service__list-icon"/>
              <p>Lorem ipsum dolor sit,</p>
            </li>
          </ul>
        </article>
      </div>

    </section>
  )
}

export default Services