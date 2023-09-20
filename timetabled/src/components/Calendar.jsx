import React from "react";
import Event from './Event'

const Calendar = () => {
  return (
    <div className="Calendar"> 
        <table> 
            <thead> 
                <tr>  
                    <th></th>
                    <th>Sunday</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                </tr>
            </thead>
            {/* Event eventname = '', prop = '' */}
            <tbody>
                <tr>
                    <td className="8AM">8 AM</td>
                    <Event event='Breakfast' color ='green' location = 'at cafe'/> 
                    <td></td>
                    <td></td>
                    <Event event='Breakfast' color ='green' location = 'at cafe'/>
                    <td></td>
                    <Event event='Breakfast' color ='green' location = 'at cafe'/>
                    <td></td>
                </tr>
                <tr>
                    <td className="9AM">9 AM</td>
                    <td></td>
                    <Event event = 'Morning lecture' color = 'blue' location = 'on campus'/>
                    <td></td>
                    <Event event = 'Morning lecture' color = 'blue' location = 'on campus'/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="10AM">10 AM</td>
                    <td></td>
                    <Event event = 'Morning lecture' color = 'blue' location = 'on campus'/>
                    <td></td>
                    <Event event = 'Morning lecture' color = 'blue' location = 'on campus'/>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="11AM">11 AM</td>
                    <Event event = 'Business meeting' color = 'orange' location = 'in office'/>
                    <td></td>
                    <Event event='Hiking' color ='purple' location = 'near mountains'/> 
                    <td></td>
                    <Event event = 'Business meeting' color = 'orange' location = 'in office'/>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="12PM">12 PM</td>
                    <Event event = 'Business meeting' color = 'orange' location = 'in office'/>
                    <td></td>
                    <Event event='Hiking' color ='purple' location = 'near mountains'/> 
                    <td></td>
                    <Event event = 'Business meeting' color = 'orange' location = 'in office'/>
                    <Event event='Sightseeing' color ='purple' location = 'in downtown'/> 
                    <td></td>
                </tr>
                <tr>
                    <td className="1 PM">1 PM</td>
                    <td></td>
                    <td></td>
                    <Event event='Hiking' color ='purple' location = 'near mountains'/>  
                    <td></td>
                    <td></td>
                    <Event event='Sightseeing' color ='purple' location = 'in downtown'/> 
                    <td></td>
                </tr>
                <tr>
                    <td className="2 PM">2 PM</td>
                    <td></td>
                    <td></td>
                    <Event event='Hiking' color ='purple' location = 'near mountains'/>  
                    <td></td>
                    <td></td>
                    <Event event='Sightseeing' color ='purple' location = 'in downtown'/> 
                    <td></td>
                </tr>
                <tr>
                    <td className="3 PM">3 PM</td>
                    <td></td>
                    <td></td>
                    <Event event = 'Afternoon lab' color = 'blue' location = 'on campus' />
                    <td></td>
                    <Event event = 'Afternoon lab' color = 'blue' location = 'on campus' />
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="4 PM">4 PM</td>
                    <td></td>
                    < Event event = 'Lunch' color = 'green' location = 'at food court'/>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="5PM"> 5 PM</td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <Event event='Fancy Dinner 🎩' color ='green' location = 'at bistro' /> 
                </tr> 
                
                </tbody>  
        </table>
    </div>
  )
}

export default Calendar;