import Vue from 'vue'
import Vuex from 'vuex'
import * as firebase from 'firebase'





Vue.use(Vuex, Vue);

export const store = new Vuex.Store({
    state: {
        meetDetails: [{
                "id": 0,
                "albumId": 1,
                "title": "Meetup in Lagos",
                "url": "https://blog.travelbeta.com/wp-content/uploads/2019/07/9-AMAZING-BEACH-RESORTS-YOU-SHOULD-VISIT-IN-LAGOS-ON-YOUR-NEXT-VACATION-800x400.jpg",
                "thumbnailUrl": "https://via.placeholder.com/150/92c952",
                "date": "2017-1-19",
                "description": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
            },

            {
                "albumId": 1,
                "id": 1,
                "title": "Meetup in Amstadam",
                "url": "http://takeofftravelers.com/wp-content/uploads/2019/03/12.jpg ",
                "thumbnailUrl": "https://via.placeholder.com/150/771796",
                "date": "2019-1-19",
                "description": "quia molestiae reprehenderit quasi aspernatur\naut expedita occaecati aliquam eveniet laudantium\nomnis quibusdam delectus saepe quia accusamus maiores nam est\ncum et ducimus et vero voluptates excepturi deleniti ratione"
            },
        ],
        user: null,
        error: null,
        loading: false
    },
    getters: {
        getAll: state => {
            ``
            return state.meetDetails
        },

        meetDetails(state) {
            return state.meetDetails.sort((meetDetailA, meetDetailB) => {
                return meetDetailA.date > meetDetailB.date
            });
        },
        featuredMeetups(getters) {
            return getters.loadedMeetups.slice(0, 1)
        },
        meetDetail(state) {
            return (meetDetailId) => {
                return state.meetDetails.find((meetDetail) => {
                    return meetDetail.id == meetDetailId;
                })
            }
        },
        user(state) {
            return state.user
        },
        error(state) {
            return state.error
        },
        loading() {
            return state.loading
        }

    },
    mutations: {
        setMeeetDetails(state, payload) {
            state.meetDetails = payload
        },
        createMeet(state, payload) {
            state.meetDetails.push(payload)
        },
        setUser(state, payload) {
            state.user = payload
        },
        signInUser(state, payload) {
            state.user = payload
        },
        setError(state, payload) {
            state.error = payload
        },
        setLoading(state, payload) {
            return state.loading = payload
        },
        clearError(state) {
            return state.error = null
        }

    },
    actions: {
        loadMeet({
            commit
        }) {
            commit('setLoading', true)
            firebase.database().ref('meetups').once('value').then(meetup => {
                    const fromBase = []
                    const obj = meetup.val();
                    for (let key in obj) {
                        fromBase.push({
                            id: key,
                            title: obj[key].title,
                            name: obj[key].name,
                            surname: obj[key].surname,
                            location: obj[key].location,
                            description: obj[key].description,
                            date: obj[key].date,
                            url: obj[key].url

                        })
                        commit('setLoading', false)
                        commit('setMeeetDetails', fromBase)

                    }
                })
                .catch()
        },
        createMeet({
            commit
        }, payload) {
            const meet = {
                title: payload.title,
                name: payload.name,
                surname: payload.surname,
                url: payload.url,
                location: payload.location,
                description: payload.description,
                date: payload.date.toISOString(),

            }
            firebase.database().ref('meetups').push(meet).then(data => {
                    console.log(data)
                    const key = data.key
                    commit('createMeet', {
                        ...meet,
                        id: key
                    })


                })
                .catch((error) => {
                    console.log(error)
                })

        },
        createUser({
            commit
        }, payload) {
            commit("setLoading", true)
            commit('clearError', null)
            firebase.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(userCredential => {
                commit('setLoading', false)
                const newUser = {
                    id: userCredential.user.uid,
                    registeredUser: []
                }
                commit('setUser', newUser)
            }).catch(error => {
                commit('setLoading', false)
                commit('setError', error)
                // console.log(error)
            })


        },
        signInUser({
            commit
        }, payload) {
            commit('setLoading', true)
            commit('clearError', null)
            firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(userCredential => {
                commit('setLoading', false)
                const newUser = {
                    id: userCredential.user.uid,
                    registeredUser: []
                }
                commit('signInUser', newUser)
            }).catch(error => {
                commit('setLoading', false)
                commit('setError', error)
                console.log(error)

            })
        },
        clearError({
            commit
        }) {
            commit('clearError')
        },

    },
})