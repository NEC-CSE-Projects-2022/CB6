
**CB6** – **PRIVLOGEDU: AN INNOVATIVE FRAMEWORK FOR REAL-TIME ENGAGEMENT RECOGNITION IN HYBRID CLASSROOMS USING NON-VISUAL LOG DATA WHILE MAINTAINING PRIVACY.**

## Team Info
- 22471A05I2 — **PALUTLA VENKATA NAVEEN** ( [LinkedIn](https://www.linkedin.com/in/palutla-venkata-naveen/)) )
_Work Done: Palutla Venkata Naveen played a key role in the successful completion of the project by contributing to the core project code development, research paper writing, and technical documentation. He was actively involved in structuring the methodology, explaining the model workflow, and preparing the complete documentation required for academic submission. In addition, he handled the conference presentation, clearly communicating the project objectives, implementation, and results to the audience.

- 22471A05F9 — **JONNALAGADDA MAHESH BABU** ( [LinkedIn](https://www.linkedin.com/in/jonnalagadda-mahesh-babu-874838366/) )
_Work Done: Jonnalagadda Mahesh Babu contributed primarily to the frontend development, focusing on designing and implementing the user-facing components of the project. He also prepared presentation materials (PPTs) for ICIH and supported the DVD loading and final submission process, ensuring that all deliverables were properly organized and submitted according to conference requirements.


## Abstract
Educational reform in the digital learning age increasingly calls for systems not only to track but also to amplify student participation in blended-classroom settings. Toward United Nations Sustainable Development Goal (SDG) 4: Quality Education, this work presents PrivLogEdu, a novel method for real-time engagement detection from non-visual log data with high prediction accuracy and strong privacy protection. Differing from vision-based emotion detection methods that pose privacy and deployment issues, PrivLogEdu leverages behavioral and temporal learning logs problem-solving sequences, time-on task, and skill-switching patterns to infer levels of engagement without recording personally identifiable visual information. The suggested approach makes use of a multi-stage pipeline: data preprocessing, sophisticated feature engineering, Skill2Vec based embedding extraction, and a GRU-attention deep neural architecture tailored for sequence modeling. This architecture allows the system to learn temporal dependencies, pay atten tion to important behavioral features, and provide engagement classification at three levels (low, moderate, high) with an accuracy of 99.91% on the EdNet-KT1 dataset. Additionally, the model uses class balancing, label smoothing, and threshold tuning to ensure strong generalization and low misclassification. Experiment assessment proves to be more effective compared to traditional engagement recognition models, with near-optimal F1-scores and slight computational costs that are acceptable for real-time utilization. Comparative analysis also attests to the fact that PrivLogEdu outperforms baseline LSTM and Transformer models in accuracy and stability. In addition, avoiding visual modalities, the system naturally minimizes ethical, and data protection risks and fits with modern educational policies prioritizing learner privacy. This research not only helps advance AI-based adaptive learning systems but also provides a scalable solution for learning platforms looking to enhance learning outcomes in hybrid and remote environments while maintaining privacy standards.

---

## Paper Reference (Inspiration)
👉 **[Paper Title The Application of Artificial Intelligence in Engineering Education: A Systematic Review
  – Author Names GUANG-CHAO WANG, CONG LIU, HONG-FENG WANG.
 ](https://ieeexplore.ieee.org/abstract/document/10851283)**, 
Original conference/IEEE paper used as inspiration for the model.

---

## Our Improvement Over Existing Paper
While existing engagement recognition systems primarily rely on visual data (face, eye gaze, posture), our work improves upon prior approaches by:
Eliminating dependency on cameras and visual sensors
Using purely non-visual interaction log data, ensuring privacy compliance
Introducing Skill2Vec embeddings to capture semantic relationships between learning skills
Employing a GRU + Attention architecture for effective temporal sequence modeling
Supporting multi-class engagement detection (Low, Moderate, High)
Achieving 99.91% accuracy, outperforming LSTM and Transformer-based baselines
---

## About the Project
This project detects student engagement levels in real time by analyzing behavioral interaction logs generated during online or hybrid learning sessions, without using any visual or personally identifiable data.

🔹 Why It Is Useful

Preserves student privacy

Scales well for large classrooms

Helps instructors identify disengaged learners early

Supports adaptive learning and timely intervention

Aligns with ethical AI principles and educational data protection policies

---

## Dataset Used
👉 **[EdNet](https://drive.google.com/file/d/1DPeNGnBcckGKjAoQQX9CSqLFokYj8DSD/view?usp=sharing)**

**Dataset Details:**
Millions of learner interaction records
Features include:
Student ID
Timestamp
Problem ID
Skill ID
Time taken
Correct / Incorrect response
Log delta
Designed for knowledge tracing and behavioral analysis
No personally identifiable or visual information

---

## Dependencies Used
Python
NumPy
Pandas
Scikit-learn
TensorFlow / Keras
Gensim (Word2Vec for Skill2Vec)
Matplotlib & Seaborn

---

## EDA & Preprocessing
Removed missing and noisy records

Filtered students with fewer than 5 interactions

Converted timestamps to readable datetime format

Session segmentation based on 30 minutes inactivity

Outlier removal in time-related features

Normalization of numerical features

Encoding of categorical features (skill ID, problem ID)

Visual analysis of:

Engagement label distribution

Time taken vs frequency
---

## Model Training Info
Model: GRU + Attention Neural Network

Optimizer: Adam Learning rate scheduling enabled

Class balancing to handle label imbalance

Label smoothing to prevent overconfidence

Threshold tuning for better class separation

Early stopping to avoid overfitting

Multiple training runs for robustness

---

## Model Testing / Evaluation
Evaluation metrics used:
Accuracy
Precision
Recall
F1-score
Confusion Matrix
ROC–AUC
Testing confirmed:
Strong generalization
Stable convergence
Minimal misclassification
Consistent performance across sessions
---

## Results
Overall Accuracy: 99.91%
Near-perfect precision and recall for major classes
Outperformed:
Vanilla LSTM
Vanilla GRU
Transformer Encoder
Lower computational cost compared to transformers
Suitable for real-time deployment
---

## Limitations & Future Work
Current Limitations:
Very low sample count for the “Highly Engaged” class
Tested primarily on a single dataset (EdNet-KT1)
Future Enhancements:
Extend to K–12 and university datasets
Integrate additional non-visual signals:
Keystroke dynamics
Navigation behavior
Implement federated learning for decentralized training

Improve class balance for rare engagement states
---

## Deployment Info
Can be deployed as:
Backend service for LMS platforms
Real-time engagement monitoring module

Suitable for:
Hybrid classrooms
Online learning platforms
Intelligent tutoring systems
Scalable and compliant with institutional privacy standards

---
