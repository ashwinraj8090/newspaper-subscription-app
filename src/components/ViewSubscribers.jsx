import React from 'react'
import Navbar from './Navbar'

const ViewSubscribers = () => {
  return (
    <div>
      <Navbar />
      <br />
      <div className="container">
        <div className="row">
          <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

            <table class="table">
              <thead>
                <tr>
                  <th scope="col">Sl No.</th>
                  <th scope="col">Subscriber Name</th>
                  <th scope="col">Phone No.</th>
                  <th scope="col">Address</th>
                  <th scope="col">District</th>
                  <th scope="col">Email Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>David John</td>
                  <td>9967859844</td>
                  <td>Kizhakkedathu,Pandalam</td>
                  <td>Pathanamthitta</td>
                  <td>djohn2gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Jacob Thomas</td>
                  <td>8970667840</td>
                  <td>Rose Villa,Perambra</td>
                  <td>Kozhikode</td>
                  <td>jacob@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Ashwin Raj</td>
                  <td>8971239800</td>
                  <td>Pranavam,Adoor</td>
                  <td>Pathanamthitta</td>
                  <td>ashwinr@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Arun Jose</td>
                  <td>9087695444</td>
                  <td>Puthanveedu,Kundara</td>
                  <td>Kollam</td>
                  <td>arunjose@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Gautham Hari</td>
                  <td>8976895433</td>
                  <td>Harinilayam,Mavelikkara</td>
                  <td>Alapppuzha</td>
                  <td>gautham@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">6</th>
                  <td>Aryan Sajan</td>
                  <td>9944815576</td>
                  <td>Aryan Bhavan,Pala</td>
                  <td>Kottayam</td>
                  <td>aryan@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">7</th>
                  <td>Aaron Varghese</td>
                  <td>8854810376</td>
                  <td>Puthiyaveedu,Thampanoor</td>
                  <td>Thiruvananthapuram</td>
                  <td>aaron@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">8</th>
                  <td>Rizwan Shah</td>
                  <td>9870810389</td>
                  <td>Orchard House,Kochi</td>
                  <td>Ernakulam</td>
                  <td>rizwan@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">9</th>
                  <td>Kiran Kumar</td>
                  <td>7074567899</td>
                  <td>Vadakkedathu,Mavelikkara</td>
                  <td>Alappuzha</td>
                  <td>kiran@gmail.com</td>
                </tr>
                <tr>
                  <th scope="row">10</th>
                  <td>Mathew John</td>
                  <td>8971081089</td>
                  <td>Hillside,Payyannur</td>
                  <td>Kannur</td>
                  <td>mathew@gmail.com</td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>

    </div>
  )
}

export default ViewSubscribers
