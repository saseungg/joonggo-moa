package com.secondhand.category;

import com.secondhand.category.dto.CategoriesDto;
import com.secondhand.category.dto.CategoryInterestsDto;
import com.secondhand.category.dto.PostTitleDto;
import com.secondhand.post.repository.InterestRepository;
import com.secondhand.util.CustomResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/categories")
public class CategoryController {

    private final CategoryService categoryService;
    private final InterestRepository interestRepository;

    @GetMapping
    public ResponseEntity<CustomResponse<CategoriesDto>> getCategoryList() {
        return ResponseEntity
                .ok()
                .body(new CustomResponse<>(
                        "success",
                        200,
                        "카테고리 목록 조회 성공",
                        categoryService.getCategoryList())
                );
    }

    @GetMapping("/interests")
    public ResponseEntity<CustomResponse<CategoryInterestsDto>> getInterestCategoryList() {
        return ResponseEntity
                .ok()
                .body(new CustomResponse<>(
                        "success",
                        200,
                        "관심 카테고리 목록 조회 성공",
                        new CategoryInterestsDto(interestRepository.interestCategory()))
                );
    }

    @GetMapping("/recommend")
    public ResponseEntity<CustomResponse<CategoriesDto>> findRecommendedCategories(@RequestBody PostTitleDto postTitleDto) {

        return ResponseEntity
                .ok()
                .body(new CustomResponse<>(
                        "success",
                        200,
                        "관심 카테고리 목록 조회 성공",
                        categoryService.getRecommendedCategories(postTitleDto.getTitle())
                ));
    }
}
