import { View, Text, FlatList } from "react-native";
import React from "react";
import PostListItem from "../../components/PostListItem";
import posts from "../../../assets/data/posts.json";

const HomeScreen = () => {
  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({ item }) => <PostListItem post={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default HomeScreen;
