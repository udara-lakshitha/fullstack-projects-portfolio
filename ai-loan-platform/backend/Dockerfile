# Use Maven image to build the JAR
FROM maven:3.9.6-eclipse-temurin-17 AS build

WORKDIR /app

# Copy pom.xml and download dependencies first (cache layer)
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the rest of the source code
COPY src ./src

# Package application
RUN mvn clean package -DskipTests

# -------------------------
# Run stage
FROM eclipse-temurin:17-jdk-jammy

WORKDIR /app

# Copy built JAR from build stage
COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]