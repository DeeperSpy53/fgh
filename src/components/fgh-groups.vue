<template>
  <button class="mainPage__btn" @click="clickMainPage">Главная страница</button>
  <form class="groups" @submit.prevent="saveData">

    <div class="groups__items">
      <div class="groups__item" v-for="item in groups" :key="item.group_id">
        <h2 @click="clickGroup(item.group_id)">Группа {{ item.group_id }}</h2>

        <div class="groups-item__players" :id="item.group_id">
          <div v-for="player in players" :key="player.id" @dblclick="clickPlayerInGrp(player)" v-show="player.group_id == item.group_id">{{ player.surname }} {{ player.name }} </div>
        </div>
      </div>
    </div>

    <table>
      <thead>
        <th>№</th>
        <th>Участник</th>
        <th>Дата рождения</th>
      </thead>

      <tbody>
        <tr v-for="(item, i) in players" :key="item.id" @dblclick="clickPlayer(item)" v-show="item.group_id == 0">
          <td>{{ i+1 }}</td>
          <td>{{ item.surname }} {{ item.name }}</td>
          <td>{{ item.birthday }}</td>
        </tr>
      </tbody>
    </table>

    <button class="groups__save" type="submit">Сохранить</button>
  </form>
</template>
  
<script>
  import axios from 'axios'

  export default {
    name: 'fgh-groups',
    data(){
      return{
        save: false,
        selectGroup: 0,
        selectGroupId: 0,
        players: [
        {
            id: 164679,
            name: "Руслан",
            surname: "Иванов",
            birthday: "2009-07-07",
            group_id: 0
        },
        {
            id: 163246,
            name: "Артем",
            surname: "Пулов",
            birthday: "1998-08-09",
            group_id: 0
        },
        {
            id: 164535,
            name: "Иван",
            surname: "Путров",
            birthday: "2007-04-10",
            group_id: 0
        },
        {
            id: 163604,
            name: "Александр",
            surname: "Назаров",
            birthday: "2004-10-06",
            group_id: 0
        },
        {
            id: 163636,
            name: "Иван",
            surname: "Киселев",
            birthday: "2005-10-29",
            group_id: 0
        },
        {
            id: 164836,
            name: "Ольгерд",
            surname: "Ковенко",
            birthday: "2006-12-25",
            group_id: 0
        },
        {
            id: 164101,
            name: "Павел",
            surname: "Кондратьев",
            birthday: "1985-10-20",
            group_id: 0
        },
        {
            id: 164457,
            name: "Иван",
            surname: "Ковенко",
            birthday: "2006-07-18",
            group_id: 0
        },
        {
            id: 162937,
            name: "Александр",
            surname: "Миронов",
            birthday: "2000-03-29",
            group_id: 0
        },
        {
            id: 164009,
            name: "Артем",
            surname: "Красковский",
            birthday: "1985-10-20",
            group_id: 0
        }, 
      ],

      groups: [
      {
        group_id: 1,
      },
      {
        group_id: 2,
      },
      {
        group_id: 3,
      }, 
      ]
      }
    },
    methods: {
      clickPlayer(item){
        if(this.selectGroup == 0){
          alert("Выберите группу с помощью клика по заголовку группы!")
          return;
        }

        item.group_id = this.selectGroupId;
      },

      clickGroup(id){
        if(this.selectGroup != 0)
          this.selectGroup.style.border = "none";

        this.selectGroupId = id;
        this.selectGroup = document.getElementById(id);
        this.selectGroup.style.border = "1px solid rgb(0, 77, 192, 0.2)";
      },

      clickPlayerInGrp(player){
        player.group_id = 0;
      },

      saveData(){
        for (const player in this.players) {
          if(this.players[player].group_id == 0)
          {
            alert("Сортируйте всех игроков по группам!");
            return;
          }
        }

        this.save = true;
        axios.post("http://localhost:3000/players", this.players).then((res) => {
          console.log(res);

          alert("Данные успешно сохранены!");
        });
      },

      clickMainPage(){
        for (const player in this.players) {
          if(this.players[player].group_id > 0)
          {
            if(!this.save)
            {
              alert("Сортируйте всех игроков по группам и сохраните результат!");
              return;
            }
          }
        }

        this.$router.push('/');
      }
    }
  }
</script>