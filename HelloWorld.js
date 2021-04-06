<body>
    <h1>
        Laptop Startup Instructions:
    </h1>
    <ul>
        <li>
            Plug in your laptop and begin charging.
        </li>
        <li>
            Open your laptop
        </li>
    </ul>
    <h3>
        Madhura
    </h3>
    <button>
        Submit
    </button>
    <input>
    <b>
        <i>hehehehe</i> hhgh
        <button>
            Insert
        </button>
    </b>
    <a href="http://www.google.com">Google</a>
    <table style="border: 2px; border-style:solid;">
        <caption><b>Time table</b></caption>
        <tr>
            <th>Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
        </tr>
        <tr>
            <td>9:00/10:00</td>
            <td>
                <a target="_blank"
                    href="https://teams.microsoft.com/l/meetup-join/19%3a8b7daff6fad844bfb99ebf8911665ad4%40thread.tacv2/1600385985547?context=%7b%22Tid%22%3a%221fd4673f-df96-4621-8638-a1d88c4c85d7%22%2c%22Oid%22%3a%2223862c56-442e-4f06-a55b-06a6cf0889e2%22%7d">Health</a>
            </td>
            <td>French2</td>
            <td>Asyncronus</td>
            <td>Health</td>
            <td>French
                <div id="counter">2</div>

            </td>
        </tr>
        <tr>
            <td>10:10/11:15</td>
            <td>ELA Honors</td>
            <td>Homeroom</td>
            <td>Asyncronus</td>
            <td>ELA Honors</td>
            <td>Homeroom</td>
        </tr>
        <tr>
            <td>11:25/12:00</td>
            <th colspan="5" style="background-color:aqua">LUNCH</td>
        </tr>
        <tr>
            <td><b>12:15/1:00</b></td>
            <td>Biology</td>
            <td>P.E.</td>
            <td>Asyncronus</td>
            <td>Biology</td>
            <td>P.E.</td>
        </tr>
        <tr>
            <th>1:30/2:25</th>
            <td>Math Analysis</td>
            <td>Chorus</td>
            <td>Asyncronus</td>
            <td>Math Analysis</td>
            <td>Chorus
            </td>
        </tr>
    </table>

    <div>
        <button onclick="increase()">Increase </button>
        <button onclick="decrease()">Decrease </button>
        <script>
            function increase() {
                var counter = document.getElementById("counter");
                var val = parseInt(counter.innerText);
                counter.innerHTML = val + 1;
            }
            function decrease() {
                var counter = document.getElementById("counter");
                var val = parseInt(counter.innerText);
                counter.innerHTML = val - 1;
            }
        </script>
    </div>
</body>
