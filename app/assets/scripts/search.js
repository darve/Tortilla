
/* ============================================ */
/*  Filters JSON tree
/* ============================================ */

var filters = {

    language: {
        display_name: "Language",
        query: "",
        children: {

            semantic_categories: {
                display_name: "Semantic Categories",
                query: "",
                meta: {}
            },

            grammatical_categories: {
                display_name: "Grammatical Categories",
                query: "",
                children: {

                    verbs: {
                        display_name: "Verbs",
                        query: "",
                        children: {

                            auxillary_verbs: {
                                display_name: "Auxillary Verbs",
                                query: "",
                                children: {

                                    modal_auxillary_verbs: {
                                        display_name: "Modal Auxillary Verbs",
                                        query: ""
                                    }
                                }
                            },

                            past_tense_verbs: {
                                display_name: "Past Tense Verbs",
                                query: "",
                                children: {

                                    irregular_past_tense_verbs: {
                                        display_name: "Irregular Past Tense Verbs",
                                        query: ""
                                    },

                                    past_simple_verbs: {
                                        display_name: "Past Simple Verbs",
                                        query: ""
                                    },

                                    past_participle_verbs: {
                                        display_name: "Past Participle Verbs",
                                        query: ""
                                    }
                                }
                            },

                            infinitive_verbs: {
                                display_name: "Infinitive Verbs",
                                query: ""
                            },

                            third_person_present_tense_verbs: {
                                display_name: "Third Person Present Tense Verbs",
                                query: ""
                            },

                            progressive_verbs: {
                                display_name: "Progressive Verbs (ing)",
                                query: ""
                            }
                        }
                    },

                    nouns: {
                        display_name: "Nouns",
                        query: "",
                        children: {

                            plurals: {
                                display_name: "Plurals",
                                query: "",
                                children: {

                                    regular_plurals: {
                                        display_name: "Regular Plurals",
                                        query: ""
                                    },

                                    irregular_plurals: {
                                        display_name: "Irregular Plurals",
                                        query: ""
                                    }
                                }
                            }
                        }
                    },

                    adjectives: {
                        display_name: "Adjectives",
                        query: ""
                    },

                    superlatives: {
                        display_name: "Superlatives",
                        query: ""
                    },

                    comparative: {
                        display_name: "Comparative",
                        query: ""
                    },

                    adverbs: {
                        display_name: "Adverbs",
                        query: ""
                    },

                    prepositions: {
                        display_name: "Prepositions",
                        query: ""
                    },

                    pronouns: {
                        display_name: "Pronouns",
                        query: ""
                    },

                    conjunctions: {
                        display_name: "Conjunctions",
                        query: ""
                    },

                    determiners: {
                        display_name: "Determiners",
                        query: ""
                    }
                }
            }
        }
    },

    speech: {
        display_name: "Speech",
        query: "",
        children: {

        }
    }
};



