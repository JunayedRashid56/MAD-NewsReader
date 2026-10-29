// src/app/(tabs)/(home)/index.tsx
import { router } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import ArticleCard from "@/components/article-card";
import { Article, ARTICLES } from "@/data/articles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ArticleList() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Extract unique categories from the articles dataset
  const categories = [...new Set(ARTICLES.map((a) => a.category))];

  // Filter articles based on selected category, or show all if null
  const filteredArticles = selectedCategory
    ? ARTICLES.filter((a) => a.category === selectedCategory)
    : ARTICLES;

  const handlePress = (article: Article) => {
    router.push({
      pathname: "/(tabs)/(home)/[id]",
      params: { id: article.id },
    });
  };

  return (
    <SafeAreaView style={styles.screen}>
      <FlatList
        data={filteredArticles}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ArticleCard article={item} onPress={handlePress} />
        )}
        contentContainerStyle={styles.list}
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <Text style={styles.listHeaderText}>
              {filteredArticles.length} stories{" "}
              {selectedCategory ? `- in ${selectedCategory}` : ""}
            </Text>

            {/* Horizontal Category Filter Pills */}
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.filterContainer}
            >
              <TouchableOpacity
                style={[
                  styles.pill,
                  selectedCategory === null && styles.activePill,
                ]}
                onPress={() => setSelectedCategory(null)}
              >
                <Text
                  style={[
                    styles.pillText,
                    selectedCategory === null && styles.activePillText,
                  ]}
                >
                  All
                </Text>
              </TouchableOpacity>

              {categories.map((cat) => (
                <TouchableOpacity
                  key={cat}
                  style={[
                    styles.pill,
                    selectedCategory === cat && styles.activePill,
                  ]}
                  onPress={() => setSelectedCategory(cat)}
                >
                  <Text
                    style={[
                      styles.pillText,
                      selectedCategory === cat && styles.activePillText,
                    ]}
                  >
                    {cat}
                  </Text>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: "#F0F4F8" },
  list: { paddingTop: 12, paddingBottom: 32 },
  listHeader: { paddingHorizontal: 16, paddingBottom: 8 },
  listHeaderText: {
    fontSize: 12,
    color: "#94A3B8",
    textTransform: "uppercase",
    letterSpacing: 1,
    marginBottom: 10,
  },
  filterContainer: { gap: 8, paddingBottom: 4 },
  pill: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: "#E2E8F0",
    marginRight: 8,
  },
  activePill: {
    backgroundColor: "#0D9488",
  },
  pillText: {
    fontSize: 13,
    fontWeight: "600",
    color: "#475569",
  },
  activePillText: {
    color: "#FFFFFF",
  },
});
